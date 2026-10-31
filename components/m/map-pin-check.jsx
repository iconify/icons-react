import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/k/kecbpiilb.css';
import '../../css/t/t20iil5tj.css';
import '../../css/v/v2ukonb-w.css';
import '../../css/r/rcgkcg2di.css';
import '../../css/j/j3xl1tijc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="kecbpiilb"/><path class="t20iil5tj wm-shine"/><path class="v2ukonb-w wm-k"/><path class="rcgkcg2di wm-a"/><path class="j3xl1tijc wm-deco"/></g>`,
		"fallback": "withicons-kawaii:map-pin-check",
	});
}

export default Component;
