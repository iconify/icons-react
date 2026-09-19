import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvilx1q3c.css';
import '../../css/s/sj776bbep.css';
import '../../css/x/xk12v3uld.css';
import '../../css/q/q5cjalbcb.css';
import '../../css/p/pd2c0_bqv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="kvilx1q3c"><path class="sj776bbep"/><path class="xk12v3uld"/><path class="q5cjalbcb"/><path class="pd2c0_bqv"/></g>`,
		"fallback": "icon-park:waterfalls-v",
	});
}

export default Component;
