import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aooy8_0ej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aooy8_0ej"/>`,
		"fallback": "iconamoon:sign-minus",
	});
}

export default Component;
