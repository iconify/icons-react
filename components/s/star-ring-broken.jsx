import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bxr8mzbxm.css';
import '../../css/z/zvnq6zy0d.css';
import '../../css/f/fhnye3b1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bxr8mzbxm"/><path class="zvnq6zy0d"/><path class="fhnye3b1t"/></g>`,
		"fallback": "solar:star-ring-broken",
	});
}

export default Component;
