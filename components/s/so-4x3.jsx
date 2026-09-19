import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8i3-uijz.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tnbv1xszf.css';
import '../../css/t/t7h8ybcts.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVG7yqWtbFV"><path class="t8i3-uijz"/></clipPath></defs><g clip-path="url(#SVG7yqWtbFV)" transform="translate(80)scale(.9375)" class="d2kvgvbvc"><path class="tnbv1xszf"/><path class="t7h8ybcts"/></g>`,
		"fallback": "flag:so-4x3",
	});
}

export default Component;
