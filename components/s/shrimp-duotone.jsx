import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uogjtkbzd.css';
import '../../css/w/wx40tbxfq.css';
import '../../css/m/mk4imu_bm.css';
import '../../css/n/n0nm-ukwf.css';
import '../../css/n/neu_sytpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uogjtkbzd"/><path class="wx40tbxfq"/><path class="mk4imu_bm"/><path class="n0nm-ukwf"/><path class="neu_sytpc"/></g>`,
		"fallback": "lucide-extended:shrimp-duotone",
	});
}

export default Component;
