import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r86r2dwxj.css';
import '../../css/t/tl9ibdbkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r86r2dwxj"/><path class="tl9ibdbkq"/></g>`,
		"fallback": "solar:login-2-line-duotone",
	});
}

export default Component;
