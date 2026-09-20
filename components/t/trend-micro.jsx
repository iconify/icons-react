import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zad-rl9dv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zad-rl9dv"/>`,
		"fallback": "thesvg-color:trend-micro",
	});
}

export default Component;
