import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wlkfjbbev.css';
import '../../css/f/ft28bq46d.css';
import '../../css/f/fd6zeibgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wlkfjbbev"/><path class="ft28bq46d"/><path class="fd6zeibgx"/></g>`,
		"fallback": "tdesign:shop-4",
	});
}

export default Component;
