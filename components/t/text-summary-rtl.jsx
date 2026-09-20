import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wduc6h5_x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wduc6h5_x"/>`,
		"fallback": "ooui:text-summary-rtl",
	});
}

export default Component;
