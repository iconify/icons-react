import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7totb15k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7totb15k"/>`,
		"fallback": "mdi-light:vector-difference-ab",
	});
}

export default Component;
