import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht2tk_has.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ht2tk_has"/>`,
		"fallback": "la:sign-out-alt",
	});
}

export default Component;
