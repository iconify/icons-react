import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/w85widokh.css';
import '../../css/t/t8jn3g9nm.css';
import '../../css/k/kkcp04bje.css';
import '../../css/i/iwnz01bfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="w85widokh wm-shadow"/><path class="t8jn3g9nm wm-shadow"/><path class="kkcp04bje"/><path class="iwnz01bfk"/></g>`,
		"fallback": "withicons-brutal:plus",
	});
}

export default Component;
