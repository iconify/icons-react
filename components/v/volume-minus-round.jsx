import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttqtthb4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttqtthb4i"/>`,
		"fallback": "coolicons:volume-minus-round",
	});
}

export default Component;
