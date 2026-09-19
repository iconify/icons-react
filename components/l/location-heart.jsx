import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjvt0lfrb.css';
import '../../css/n/nu2_-nbje.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjvt0lfrb"/><path class="nu2_-nbje"/>`,
		"fallback": "carbon:location-heart",
	});
}

export default Component;
