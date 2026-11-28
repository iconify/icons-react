import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji9yjui_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ji9yjui_b"/>`,
		"fallback": "noviair:key-x",
	});
}

export default Component;
