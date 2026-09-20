import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/ms5m5udxx.css';
import '../../css/r/rvg5dwd0q.css';
import '../../css/s/scppicc_r.css';
import '../../css/k/kfeq3jj3r.css';
import '../../css/c/cf_yw3brg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ms5m5udxx"/><path class="rvg5dwd0q"/><path class="scppicc_r"/><path class="kfeq3jj3r"/><path class="cf_yw3brg"/></g>`,
		"fallback": "solar:monitor-smartphone-line-duotone",
	});
}

export default Component;
