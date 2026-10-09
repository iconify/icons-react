import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ik1b_sbhm.css';
import '../../css/e/ecaknubvs.css';
import '../../css/o/o094g_j_t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ik1b_sbhm"/><path class="ecaknubvs"/><path class="o094g_j_t"/>`,
		"fallback": "energy-icons:offshore-platform-48",
	});
}

export default Component;
