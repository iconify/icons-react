import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/ck-tkcbik.css';
import '../../css/j/jerdz3n6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ck-tkcbik"/><path class="jerdz3n6w"/></g>`,
		"fallback": "solar:radar-line-duotone",
	});
}

export default Component;
