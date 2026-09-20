import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vvtmisbep.css';
import '../../css/o/ou-efcegg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vvtmisbep"/><path clip-rule="evenodd" class="ou-efcegg"/></g>`,
		"fallback": "reicon:wallpaper-filled",
	});
}

export default Component;
