import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jasc9ibwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jasc9ibwg"/>`,
		"fallback": "keyline-icons:square-play",
	});
}

export default Component;
