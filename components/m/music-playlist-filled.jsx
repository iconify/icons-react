import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/esoi5lsmz.css';
import '../../css/e/e_4-k9bih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="esoi5lsmz"/><path class="e_4-k9bih"/></g>`,
		"fallback": "reicon:music-playlist-filled",
	});
}

export default Component;
