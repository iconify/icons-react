import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0hy8ybjy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0hy8ybjy"/>`,
		"fallback": "ooui:watchlist-ltr",
	});
}

export default Component;
