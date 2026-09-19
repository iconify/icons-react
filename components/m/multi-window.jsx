import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vtcmcgchf.css';
import '../../css/s/scnmdvh_t.css';
import '../../css/f/f6zzwk00q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vtcmcgchf"/><path class="scnmdvh_t"/><path class="f6zzwk00q"/></g>`,
		"fallback": "iconoir:multi-window",
	});
}

export default Component;
