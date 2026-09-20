import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xupi7pbch.css';
import '../../css/p/pdl1bhbxu.css';
import '../../css/l/l4cuvtbmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xupi7pbch"/><path clip-rule="evenodd" class="pdl1bhbxu"/><path class="l4cuvtbmt"/></g>`,
		"fallback": "reicon:video-play-h-filled",
	});
}

export default Component;
