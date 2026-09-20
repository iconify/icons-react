import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxwu6fq3t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxwu6fq3t"/>`,
		"fallback": "selfhst:red-hat-lightspeed-light",
	});
}

export default Component;
