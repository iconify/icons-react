import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3m-yssgr.css';
import '../../css/t/tr-eedcjf.css';
import '../../css/i/ijk0j0bkf.css';
import '../../css/y/ywt-i_b0o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3m-yssgr"/><path class="tr-eedcjf"/><path class="ijk0j0bkf"/><path class="ywt-i_b0o"/>`,
		"fallback": "energy-icons:pizza-oven-48-bold",
	});
}

export default Component;
