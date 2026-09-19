import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oc0vi5bvd.css';
import '../../css/y/y-h7hdc4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="oc0vi5bvd"/><path class="y-h7hdc4i"/></g>`,
		"fallback": "iconamoon:location-pin-off-light",
	});
}

export default Component;
