import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hngr2_b6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hngr2_b6b"/>`,
		"fallback": "coolicons:sword-fill-round",
	});
}

export default Component;
