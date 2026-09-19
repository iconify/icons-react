import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zrqhgjb6r.css';
import '../../css/y/yjowd-bhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zrqhgjb6r"/><path class="yjowd-bhb"/></g>`,
		"fallback": "hugeicons:rocket-02",
	});
}

export default Component;
