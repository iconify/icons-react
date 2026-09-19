import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/get_m1buo.css';
import '../../css/j/ju_3v4b6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="get_m1buo"/><path class="ju_3v4b6d"/></g>`,
		"fallback": "hugeicons:paint-brush-02",
	});
}

export default Component;
