import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c0-ydxhpn.css';
import '../../css/i/ids849bmv.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c0-ydxhpn"/><path class="ids849bmv"/></g>`,
		"fallback": "thesvg-color:postmark",
	});
}

export default Component;
