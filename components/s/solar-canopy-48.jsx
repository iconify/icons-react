import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8r_qsbws.css';
import '../../css/r/ry01m7_4o.css';
import '../../css/b/bbwelfbky.css';
import '../../css/w/w4lj5sbru.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8r_qsbws"/><path class="ry01m7_4o"/><path class="bbwelfbky"/><path class="w4lj5sbru"/>`,
		"fallback": "energy-icons:solar-canopy-48",
	});
}

export default Component;
