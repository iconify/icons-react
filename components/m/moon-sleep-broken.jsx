import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/x8uid8bbr.css';
import '../../css/l/l-8z1dbaq.css';
import '../../css/x/x3iiwe1dj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="x8uid8bbr"/><path class="l-8z1dbaq"/><path class="x3iiwe1dj"/></g>`,
		"fallback": "solar:moon-sleep-broken",
	});
}

export default Component;
