import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjoaa4bka.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjoaa4bka"/>`,
		"fallback": "f7:suit-heart-fill",
	});
}

export default Component;
