import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etw8_08xb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etw8_08xb"/>`,
		"fallback": "iconamoon:sign-minus-square-thin",
	});
}

export default Component;
