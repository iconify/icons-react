import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk1iapbhj.css';
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
		"content": `<path class="secondary sk1iapbhj"/><g class="dt0cm9dhy primary"><path class="vbe8lbbcp"/><path class="t3i5tcbhl"/><path class="ekp9r-bkm"/><path class="u8lek1bgr"/></g>`,
		"fallback": "iconaut:play-bug-duo",
	});
}

export default Component;
