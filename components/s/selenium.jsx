import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyo7v03gi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyo7v03gi"/>`,
		"fallback": "thesvg-color:selenium",
	});
}

export default Component;
