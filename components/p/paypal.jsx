import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ka9t6t5bz.css';
import '../../css/t/tap_1wbud.css';
import '../../css/o/ofz1fackm.css';

const viewBox = {"width":37.351,"height":45,"left":7.056,"top":3};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g xmlns="http://www.w3.org/2000/svg"><path class="ka9t6t5bz"/><path class="tap_1wbud"/><path class="ofz1fackm"/></g>`,
		"fallback": "thesvg-color:paypal",
	});
}

export default Component;
