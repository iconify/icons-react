import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lmfphabmw.css';
import '../../css/f/fm3subb2s.css';
import '../../css/y/yu9fkwahu.css';
import '../../css/l/l89t2ybtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lmfphabmw"/><path class="fm3subb2s"/><path class="yu9fkwahu"/><path clip-rule="evenodd" class="l89t2ybtz"/></g>`,
		"fallback": "solar:wallpaper-bold",
	});
}

export default Component;
