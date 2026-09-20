import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/s/s0muxwpfo.css';
import '../../css/y/y3i7eq1mc.css';
import '../../css/r/ryc13abwb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="s0muxwpfo"/><path class="y3i7eq1mc"/><path class="ryc13abwb"/></g>`,
		"fallback": "streamline-plump:park",
	});
}

export default Component;
