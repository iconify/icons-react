import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b7o3j7jaf.css';
import '../../css/z/zami064cu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b7o3j7jaf"/><path class="zami064cu"/></g>`,
		"fallback": "solar:logout-2-linear",
	});
}

export default Component;
