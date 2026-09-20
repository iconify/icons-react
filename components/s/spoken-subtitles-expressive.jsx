import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k6g2labnx.css';
import '../../css/v/v11yvdspi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="k6g2labnx"/><path class="v11yvdspi"/></g>`,
		"fallback": "nrk:spoken-subtitles-expressive",
	});
}

export default Component;
