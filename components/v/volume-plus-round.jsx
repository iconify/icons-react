import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2-__6b8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2-__6b8d"/>`,
		"fallback": "coolicons:volume-plus-round",
	});
}

export default Component;
