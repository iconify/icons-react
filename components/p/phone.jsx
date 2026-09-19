import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdk9atbuo.css';

const viewBox = {"width":408,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdk9atbuo"/>`,
		"fallback": "ps:phone",
	});
}

export default Component;
