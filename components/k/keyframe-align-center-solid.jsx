import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-l1pd0_w.css';
import '../../css/m/m7zxsgbcu.css';
import '../../css/x/xg7awccao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h-l1pd0_w"><path class="m7zxsgbcu"/><path clip-rule="evenodd" class="xg7awccao"/></g>`,
		"fallback": "iconoir:keyframe-align-center-solid",
	});
}

export default Component;
