import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw0k10tqf.css';
import '../../css/r/rnj4lldhb.css';
import '../../css/w/w1yt_6bzo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aw0k10tqf"/><path class="rnj4lldhb"/><path class="w1yt_6bzo"/>`,
		"fallback": "energy-icons:solar-kit-20-bold",
	});
}

export default Component;
