import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/y/ywzudrybg.css';
import '../../css/x/x22s60b5g.css';
import '../../css/k/kgo0s5bve.css';
import '../../css/s/s2j17hbhz.css';
import '../../css/s/sr42w3btw.css';
import '../../css/z/z5qsc6boq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ywzudrybg"/><path class="x22s60b5g"/><path class="kgo0s5bve wm-shine"/><path class="s2j17hbhz wm-k"/><path class="sr42w3btw wm-a"/><path class="wm-deco z5qsc6boq"/></g>`,
		"fallback": "withicons-kawaii:snow-globe",
	});
}

export default Component;
