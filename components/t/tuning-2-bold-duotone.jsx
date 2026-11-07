import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m03pku77p.css';
import '../../css/q/q7wq8kbpw.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/r/rmfkw9bns.css';
import '../../css/b/bh4awnbzk.css';
import '../../css/r/ro_trobcb.css';
import '../../css/i/ikzl0k6ol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m03pku77p"/><path class="q7wq8kbpw"/><g class="xtpeb-edw"><path class="rmfkw9bns"/><path class="bh4awnbzk"/><path class="ro_trobcb"/><path class="ikzl0k6ol"/></g>`,
		"fallback": "solar:tuning-2-bold-duotone",
	});
}

export default Component;
