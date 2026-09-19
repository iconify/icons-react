import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhol5acdd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhol5acdd"/>`,
		"fallback": "icomoon-free:spades",
	});
}

export default Component;
