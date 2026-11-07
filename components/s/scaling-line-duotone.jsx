import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f-i4mzo6f.css';
import '../../css/k/k_eyoabrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f-i4mzo6f"/><path class="k_eyoabrm"/></g>`,
		"fallback": "solar:scaling-line-duotone",
	});
}

export default Component;
