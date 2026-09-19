import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gasgx252x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gasgx252x"/>`,
		"fallback": "akar-icons:price-cut",
	});
}

export default Component;
