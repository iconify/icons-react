import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zykliibio.css';
import '../../css/u/u7d1qdbut.css';
import '../../css/b/b6kmce7vq.css';
import '../../css/l/lxvhw1bbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zykliibio"/><path class="u7d1qdbut"/><path class="b6kmce7vq"/><path class="lxvhw1bbc"/></g>`,
		"fallback": "hugeicons:shipping-loading",
	});
}

export default Component;
