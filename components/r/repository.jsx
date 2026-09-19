import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jbffvpbdy.css';
import '../../css/n/n27aycbdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jbffvpbdy"/><path class="n27aycbdu"/></g>`,
		"fallback": "hugeicons:repository",
	});
}

export default Component;
