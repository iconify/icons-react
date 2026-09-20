import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0bt8abzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r0bt8abzo"/>`,
		"fallback": "solar:square-alt-arrow-left-outline",
	});
}

export default Component;
