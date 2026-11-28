import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vbe8lbbcp.css';
import '../../css/t/t3i5tcbhl.css';
import '../../css/e/ekp9r-bkm.css';
import '../../css/u/u8lek1bgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vbe8lbbcp"/><path class="t3i5tcbhl"/><path class="ekp9r-bkm"/><path class="u8lek1bgr"/></g>`,
		"fallback": "iconaut:play-bug",
	});
}

export default Component;
