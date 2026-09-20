import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8hp_8b-b.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8hp_8b-b"/>`,
		"fallback": "picon:ufo",
	});
}

export default Component;
