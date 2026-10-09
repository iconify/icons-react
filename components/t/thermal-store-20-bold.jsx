import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6gyvvg5u.css';
import '../../css/w/w5la7cbdm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6gyvvg5u"/><path class="w5la7cbdm"/>`,
		"fallback": "energy-icons:thermal-store-20-bold",
	});
}

export default Component;
