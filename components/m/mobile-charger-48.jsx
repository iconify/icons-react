import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2fzm2btn.css';
import '../../css/y/y740_r6rb.css';
import '../../css/g/g_7g0l_kn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2fzm2btn"/><path class="y740_r6rb"/><path class="g_7g0l_kn"/>`,
		"fallback": "energy-icons:mobile-charger-48",
	});
}

export default Component;
