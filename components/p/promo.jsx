import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hza2asblm.css';

const viewBox = {"width":480,"height":496};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hza2asblm"/>`,
		"fallback": "ps:promo",
	});
}

export default Component;
