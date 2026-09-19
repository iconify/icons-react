import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dia0nqdkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dia0nqdkx"/>`,
		"fallback": "fe:keyboard",
	});
}

export default Component;
