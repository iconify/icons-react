import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_o9xqbdp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_o9xqbdp"/>`,
		"fallback": "la:underline-solid",
	});
}

export default Component;
