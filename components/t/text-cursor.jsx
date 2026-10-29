import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jwlnhcczc.css';
import '../../css/f/fl2yreqjg.css';
import '../../css/o/o1uw8ccbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jwlnhcczc"/><path class="fl2yreqjg"/><path class="o1uw8ccbv"/></g>`,
		"fallback": "withicons-bauhaus:text-cursor",
	});
}

export default Component;
