import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww3upyb6j.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ww3upyb6j"/>`,
		"fallback": "fa-brands:perbyte",
	});
}

export default Component;
