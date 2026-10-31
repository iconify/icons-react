import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_goz-b_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_goz-b_n"/>`,
		"fallback": "withicons:scale-gloss",
	});
}

export default Component;
