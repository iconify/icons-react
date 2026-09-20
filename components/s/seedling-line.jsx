import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkaqp8bhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkaqp8bhd"/>`,
		"fallback": "ri:seedling-line",
	});
}

export default Component;
