import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ytjdx8v5q.css';
import '../../css/t/t2cylssnp.css';
import '../../css/g/gnxyv35qd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ytjdx8v5q"/><path class="t2cylssnp"/><path class="gnxyv35qd"/></g>`,
		"fallback": "solar:panorama-broken",
	});
}

export default Component;
