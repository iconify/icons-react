import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wdlzf4nfo.css';
import '../../css/r/r63fpqb9i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wdlzf4nfo"/><path class="r63fpqb9i"/></g>`,
		"fallback": "fluent-emoji-high-contrast:night-with-stars",
	});
}

export default Component;
