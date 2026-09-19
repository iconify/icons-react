import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we63e0kfi.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we63e0kfi"/>`,
		"fallback": "f7:suit-heart",
	});
}

export default Component;
