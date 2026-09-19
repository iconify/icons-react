import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3nk8bb3e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3nk8bb3e"/>`,
		"fallback": "icon-park-outline:spa-candle",
	});
}

export default Component;
