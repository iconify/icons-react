import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/pic6pw3zm.css';
import '../../css/y/yh1o8rbly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="pic6pw3zm"/><path class="yh1o8rbly"/></g>`,
		"fallback": "akar-icons:trophy",
	});
}

export default Component;
