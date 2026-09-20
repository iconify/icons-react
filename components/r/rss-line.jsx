import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu3ehfb8w.css';
import '../../css/z/zuzxidbsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pu3ehfb8w"/><path class="zuzxidbsh"/>`,
		"fallback": "mingcute:rss-line",
	});
}

export default Component;
