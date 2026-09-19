import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s5r0y_lle.css';
import '../../css/i/ir4zst_pb.css';
import '../../css/f/fux2y5bwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s5r0y_lle"/><path class="ir4zst_pb"/><path class="fux2y5bwu"/></g>`,
		"fallback": "covid:virus-lab-research-magnifier-1",
	});
}

export default Component;
