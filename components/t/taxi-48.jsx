import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkk820mfz.css';
import '../../css/w/w2_kf1b2m.css';
import '../../css/x/x7_wgibau.css';
import '../../css/s/snwblib0n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkk820mfz"/><path class="w2_kf1b2m"/><path class="x7_wgibau"/><path class="snwblib0n"/>`,
		"fallback": "energy-icons:taxi-48",
	});
}

export default Component;
