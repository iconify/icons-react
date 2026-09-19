import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zd_1y0b4r.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zd_1y0b4r"/>`,
		"fallback": "fa7-brands:steam-symbol",
	});
}

export default Component;
