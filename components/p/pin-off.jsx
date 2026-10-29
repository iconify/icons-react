import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sp_9k2bqz.css';
import '../../css/z/zf8seebbc.css';
import '../../css/z/zgenmrbhk.css';
import '../../css/x/xgn8g_bte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="sp_9k2bqz wm-k"/><path class="zf8seebbc"/><path class="zgenmrbhk"/><path class="wm-s xgn8g_bte"/></g>`,
		"fallback": "withicons-bauhaus:pin-off",
	});
}

export default Component;
