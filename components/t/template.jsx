import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mhf8jdbps.css';
import '../../css/o/o85dk3b4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mhf8jdbps"/><path class="o85dk3b4o"/></g>`,
		"fallback": "tdesign:template",
	});
}

export default Component;
