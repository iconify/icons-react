import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkk820mfz.css';
import '../../css/w/w2_kf1b2m.css';
import '../../css/j/jv60--btp.css';
import '../../css/l/lc9zt7qnp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkk820mfz"/><path class="w2_kf1b2m"/><path class="jv60--btp"/><path class="lc9zt7qnp"/>`,
		"fallback": "energy-icons:vehicle-to-grid-48",
	});
}

export default Component;
