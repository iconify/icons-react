import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8i3-uijz.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rl_ymab9k.css';
import '../../css/r/r5ogkxszf.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVG7yqWtbFV"><path class="t8i3-uijz"/></clipPath></defs><g clip-path="url(#SVG7yqWtbFV)" transform="translate(80)scale(.9375)" class="d2kvgvbvc"><path class="rl_ymab9k"/><path class="r5ogkxszf"/></g>`,
		"fallback": "flag:vn-4x3",
	});
}

export default Component;
