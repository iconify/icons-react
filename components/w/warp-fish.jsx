import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/u/uz42igb1u.css';
import '../../css/a/a46aen0he.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="uz42igb1u"/><path class="a46aen0he"/></g>`,
		"fallback": "streamline-sharp-color:warp-fish",
	});
}

export default Component;
