import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_u2c4bxg.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_u2c4bxg"/>`,
		"fallback": "garden:phone-call-in-stroke-12",
	});
}

export default Component;
