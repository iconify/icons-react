import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pvi0yhb5v.css';
import '../../css/y/yaf9ypv9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pvi0yhb5v"/><path class="yaf9ypv9a"/></g>`,
		"fallback": "hugeicons:logout-square-02",
	});
}

export default Component;
