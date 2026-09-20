import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayneljb8k.css';
import '../../css/u/u7z6scc3l.css';
import '../../css/s/su6j1bbgd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayneljb8k"/><path class="u7z6scc3l"/><path class="su6j1bbgd"/>`,
		"fallback": "streamline-pixel:interface-essential-signin-expand",
	});
}

export default Component;
