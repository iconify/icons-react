import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt3xe4rcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jt3xe4rcz"/>`,
		"fallback": "thesvg-color:parsedotly",
	});
}

export default Component;
