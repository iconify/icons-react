import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw5w_lbpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dw5w_lbpr"/>`,
		"fallback": "coolicons:tally-5-fill-round",
	});
}

export default Component;
