import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n6p4904jy.css';
import '../../css/w/wox9ac6ay.css';
import '../../css/o/o5183lq1x.css';
import '../../css/k/kp4hwlbkt.css';
import '../../css/x/xzcksd_ff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n6p4904jy"/><path class="wox9ac6ay"/><path class="o5183lq1x"/><path class="kp4hwlbkt"/><path class="xzcksd_ff"/></g>`,
		"fallback": "streamline-ultimate-color:lock-unlock-4",
	});
}

export default Component;
