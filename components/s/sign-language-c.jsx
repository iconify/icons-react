import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdoy8tbjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdoy8tbjz"/>`,
		"fallback": "hugeicons:sign-language-c",
	});
}

export default Component;
