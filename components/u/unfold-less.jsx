import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6diiztnm.css';

const viewBox = {"width":200,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6diiztnm"/>`,
		"fallback": "zmdi:unfold-less",
	});
}

export default Component;
