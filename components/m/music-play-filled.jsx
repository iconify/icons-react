import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pwn_2pq0m.css';
import '../../css/h/h5fnnvrcw.css';
import '../../css/w/wj9frcb5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pwn_2pq0m"/><path class="h5fnnvrcw"/><path class="wj9frcb5m"/></g>`,
		"fallback": "reicon:music-play-filled",
	});
}

export default Component;
