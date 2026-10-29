import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/t5-trbc8l.css';
import '../../css/i/iixef2bri.css';
import '../../css/e/ebwqddmpj.css';
import '../../css/k/kcvry7b9o.css';
import '../../css/v/vthlvcb8o.css';
import '../../css/f/fpr348e2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="t5-trbc8l wm-shadow"/><path class="iixef2bri"/><path class="ebwqddmpj"/><path class="kcvry7b9o"/><path class="vthlvcb8o wm-shine"/><path class="fpr348e2o wm-deco"/></g>`,
		"fallback": "withicons-sticker:life-buoy",
	});
}

export default Component;
