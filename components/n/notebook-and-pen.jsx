import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc9ys4ivd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wc9ys4ivd"/>`,
		"fallback": "icon-park-outline:notebook-and-pen",
	});
}

export default Component;
