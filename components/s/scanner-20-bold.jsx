import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9fpfpb1i.css';
import '../../css/d/diwo_7x5o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9fpfpb1i"/><path class="diwo_7x5o"/>`,
		"fallback": "energy-icons:scanner-20-bold",
	});
}

export default Component;
