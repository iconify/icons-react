import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b6wn-fg9e.css';
import '../../css/k/k3rszud3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b6wn-fg9e"/><path class="k3rszud3x"/></g>`,
		"fallback": "tdesign:shop",
	});
}

export default Component;
