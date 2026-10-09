import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwtvqw55v.css';
import '../../css/i/izybdv_gb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwtvqw55v"/><path class="izybdv_gb"/>`,
		"fallback": "energy-icons:noise-reduction-48",
	});
}

export default Component;
