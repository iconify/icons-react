import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqwmttb_b.css';
import '../../css/r/r_ehnoaxt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqwmttb_b"/><path class="r_ehnoaxt"/>`,
		"fallback": "energy-icons:trending-down-48",
	});
}

export default Component;
