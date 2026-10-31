import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjs_si8ps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjs_si8ps"/>`,
		"fallback": "coolicons:square-chevron-double-left-fill-round",
	});
}

export default Component;
