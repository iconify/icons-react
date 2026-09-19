import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p35kmxb4r.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p35kmxb4r"/>`,
		"fallback": "fa6-brands:square-lastfm",
	});
}

export default Component;
