import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp7upebym.css';
import '../../css/a/a1r6rtrur.css';
import '../../css/y/yzy9h1bkw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xp7upebym"><path class="a1r6rtrur"/><path class="yzy9h1bkw"/></g>`,
		"fallback": "catppuccin:ms-word",
	});
}

export default Component;
