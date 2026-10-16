import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg95nlblw.css';
import '../../css/k/kbgev3boj.css';
import '../../css/i/ihmii9b0s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg95nlblw"/><path class="kbgev3boj"/><path class="ihmii9b0s"/>`,
		"fallback": "energy-icons:suction-bucket-48-bold",
	});
}

export default Component;
