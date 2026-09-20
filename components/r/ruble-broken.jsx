import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pt0bne2qz.css';
import '../../css/h/h18jbxq3b.css';
import '../../css/k/ko6o-6b9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pt0bne2qz"/><path class="h18jbxq3b"/><path class="ko6o-6b9b"/></g>`,
		"fallback": "solar:ruble-broken",
	});
}

export default Component;
