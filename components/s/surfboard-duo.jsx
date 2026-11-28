import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwvvueakd.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/km5i-ppez.css';
import '../../css/h/hy-9zt58a.css';
import '../../css/h/hssgctbcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwvvueakd secondary"/><g class="dt0cm9dhy primary"><path class="km5i-ppez"/><path class="hy-9zt58a"/><path class="hssgctbcr"/></g>`,
		"fallback": "iconaut:surfboard-duo",
	});
}

export default Component;
