import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jdeo9ob-w.css';
import '../../css/d/dot34obfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jdeo9ob-w"/><path class="dot34obfp"/></g>`,
		"fallback": "solar:skip-next-line-duotone",
	});
}

export default Component;
