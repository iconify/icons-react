import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/u3e833beo.css';
import '../../css/k/k3xvwwbhz.css';
import '../../css/y/yaf0hz8jh.css';
import '../../css/x/xgn8g_bte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="u3e833beo wm-k"/><path class="k3xvwwbhz"/><path class="yaf0hz8jh"/><path class="wm-s xgn8g_bte"/></g>`,
		"fallback": "withicons-bauhaus:map-pin-off",
	});
}

export default Component;
