import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_q3dvbyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h_q3dvbyq"/>`,
		"fallback": "akar-icons:linkedin-v2-fill",
	});
}

export default Component;
