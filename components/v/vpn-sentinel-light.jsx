import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxk4r1_gb.css';
import '../../css/b/bfgj_tbvh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxk4r1_gb"/><path class="bfgj_tbvh"/>`,
		"fallback": "selfhst:vpn-sentinel-light",
	});
}

export default Component;
