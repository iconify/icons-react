import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpqzzfw7h.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpqzzfw7h"/>`,
		"fallback": "fa-brands:stripe-s",
	});
}

export default Component;
