import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnws3owxo.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnws3owxo"/>`,
		"fallback": "thesvg-color:react-wheel-picker-light",
	});
}

export default Component;
