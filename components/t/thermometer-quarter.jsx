import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_e6p9bzg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_e6p9bzg"/>`,
		"fallback": "la:thermometer-quarter",
	});
}

export default Component;
