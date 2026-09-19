import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t25chc-0u.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t25chc-0u"/>`,
		"fallback": "devicon:jamstack",
	});
}

export default Component;
