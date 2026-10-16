import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybbuh2wlg.css';
import '../../css/w/wnxmmacan.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybbuh2wlg"/><path class="wnxmmacan"/>`,
		"fallback": "energy-icons:negative-price-20-bold",
	});
}

export default Component;
