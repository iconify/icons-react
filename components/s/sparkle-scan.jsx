import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yn436cvro.css';
import '../../css/e/ewto5oebz.css';
import '../../css/g/g7smnwyub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yn436cvro"/><path class="ewto5oebz"/><path class="g7smnwyub"/></g>`,
		"fallback": "andrsrxn:sparkle-scan",
	});
}

export default Component;
