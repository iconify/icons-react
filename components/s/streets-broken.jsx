import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vzy4mwyot.css';
import '../../css/k/k-xqiwbqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vzy4mwyot"/><path class="k-xqiwbqo"/></g>`,
		"fallback": "solar:streets-broken",
	});
}

export default Component;
