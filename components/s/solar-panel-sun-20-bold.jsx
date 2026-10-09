import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xaxkg6sjr.css';
import '../../css/k/kvhcgabor.css';
import '../../css/d/dr3bnj-zy.css';
import '../../css/l/l3l3_s14q.css';
import '../../css/m/m0n0n5xlv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xaxkg6sjr"/><path class="kvhcgabor"/><path class="dr3bnj-zy"/><path class="l3l3_s14q"/><path class="m0n0n5xlv"/>`,
		"fallback": "energy-icons:solar-panel-sun-20-bold",
	});
}

export default Component;
