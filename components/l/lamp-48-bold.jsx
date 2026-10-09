import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtf397bse.css';
import '../../css/x/xyb5vubsu.css';
import '../../css/w/wwtxgkniu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtf397bse"/><path class="xyb5vubsu"/><path class="wwtxgkniu"/>`,
		"fallback": "energy-icons:lamp-48-bold",
	});
}

export default Component;
