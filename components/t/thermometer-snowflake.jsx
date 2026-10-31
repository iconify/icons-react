import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yh6yhbtpg.css';
import '../../css/y/y7kilgu_s.css';
import '../../css/n/njcv8p2vz.css';
import '../../css/m/m4rcic0mu.css';
import '../../css/k/k0s99xuhh.css';
import '../../css/e/e-k16bc4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow yh6yhbtpg"/><path class="y7kilgu_s"/><path class="njcv8p2vz"/><path class="m4rcic0mu"/><path class="k0s99xuhh"/><path class="e-k16bc4z"/></g>`,
		"fallback": "withicons-retro:thermometer-snowflake",
	});
}

export default Component;
