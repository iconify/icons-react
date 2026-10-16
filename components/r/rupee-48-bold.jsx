import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgj5w8hcw.css';
import '../../css/v/vd-zhbsrp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgj5w8hcw"/><path class="vd-zhbsrp"/>`,
		"fallback": "energy-icons:rupee-48-bold",
	});
}

export default Component;
