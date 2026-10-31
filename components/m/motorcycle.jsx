import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/pv6bxdbuu.css';
import '../../css/x/x31j9rbre.css';
import '../../css/p/p_stqxvru.css';
import '../../css/e/exsxb309p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="pv6bxdbuu wm-shadow"/><path class="x31j9rbre"/><path class="p_stqxvru"/><path class="exsxb309p"/></g>`,
		"fallback": "withicons-retro:motorcycle",
	});
}

export default Component;
