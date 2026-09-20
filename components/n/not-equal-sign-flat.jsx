import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/ee0gyvbeu.css';
import '../../css/w/w1lcx1_hu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ee0gyvbeu"/><path class="w1lcx1_hu"/></g>`,
		"fallback": "streamline-color:not-equal-sign-flat",
	});
}

export default Component;
