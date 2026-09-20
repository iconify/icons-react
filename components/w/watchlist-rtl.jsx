import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thes92byx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thes92byx"/>`,
		"fallback": "ooui:watchlist-rtl",
	});
}

export default Component;
