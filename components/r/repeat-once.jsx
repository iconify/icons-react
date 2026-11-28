import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mbbhoq-at.css';
import '../../css/e/e0a3vrbaw.css';
import '../../css/w/wwlijhbfb.css';
import '../../css/o/o67bosbsu.css';
import '../../css/k/kvpll4b7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mbbhoq-at"/><path class="e0a3vrbaw"/><path class="wwlijhbfb"/><path class="o67bosbsu"/><path class="kvpll4b7m"/></g>`,
		"fallback": "iconaut:repeat-once",
	});
}

export default Component;
