import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/oaf72vz_i.css';
import '../../css/l/lu9u9u8wt.css';
import '../../css/q/qf7tbcbyb.css';
import '../../css/j/ju8v6k8zc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="oaf72vz_i"/><path class="lu9u9u8wt"/><path class="qf7tbcbyb"/><path class="ju8v6k8zc"/></g>`,
		"fallback": "keyline-icons:triangle-alert-sharp-two-tone",
	});
}

export default Component;
