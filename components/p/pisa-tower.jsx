import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zl9d4g4fa.css';
import '../../css/a/avjt62p1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zl9d4g4fa"/><path class="avjt62p1r"/></g>`,
		"fallback": "hugeicons:pisa-tower",
	});
}

export default Component;
