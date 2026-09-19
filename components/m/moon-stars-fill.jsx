import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iakkxkbjk.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iakkxkbjk"/>`,
		"fallback": "f7:moon-stars-fill",
	});
}

export default Component;
