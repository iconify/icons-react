import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vtcmcgchf.css';
import '../../css/g/gnio0ig7m.css';
import '../../css/s/scnmdvh_t.css';
import '../../css/o/ohrf1znlr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vtcmcgchf"/><path class="gnio0ig7m"/><path class="scnmdvh_t"/><path class="ohrf1znlr"/></g>`,
		"fallback": "iconoir:multi-mac-os-window",
	});
}

export default Component;
