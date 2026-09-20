import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wg1_g4b9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wg1_g4b9j"/>`,
		"fallback": "uit:minus-square-full",
	});
}

export default Component;
