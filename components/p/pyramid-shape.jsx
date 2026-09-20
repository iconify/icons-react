import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5o_ojqej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5o_ojqej"/>`,
		"fallback": "streamline-sharp:pyramid-shape",
	});
}

export default Component;
