import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5eak3k2p.css';
import '../../css/p/p757kirnj.css';
import '../../css/z/zgy9megfu.css';
import '../../css/j/jw_09acez.css';
import '../../css/m/mmhxcqcoa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l5eak3k2p"><path class="p757kirnj wm-shadow"/><path class="wm-k zgy9megfu"/><path class="jw_09acez wm-a"/><path class="mmhxcqcoa wm-k"/></g>`,
		"fallback": "withicons-brutal:user-circle",
	});
}

export default Component;
