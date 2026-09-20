import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5wc1_b_q.css';
import '../../css/d/dr8f4qvxq.css';
import '../../css/p/p220ddb0m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGm8Kyf2JF" x1="256" x2="256" y1="261.8" y2="758.2" gradientTransform="translate(0 -254)" gradientUnits="userSpaceOnUse"><stop offset="0" class="h5wc1_b_q"/><stop offset="1" class="dr8f4qvxq"/></linearGradient><path fill="url(#SVGm8Kyf2JF)" class="p220ddb0m"/>`,
		"fallback": "selfhst:opnform",
	});
}

export default Component;
