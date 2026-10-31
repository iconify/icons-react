import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/k/k96-hormc.css';
import '../../css/y/yg6srfb8r.css';
import '../../css/z/z6s-x5nyb.css';
import '../../css/h/h0_d3oolp.css';
import '../../css/i/ibxfsfege.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="k96-hormc"/><path class="wm-shine yg6srfb8r"/><path class="wm-k z6s-x5nyb"/><path class="h0_d3oolp wm-a"/><path class="ibxfsfege wm-deco"/></g>`,
		"fallback": "withicons-kawaii:message-circle-more",
	});
}

export default Component;
