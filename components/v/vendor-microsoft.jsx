import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc8h3_bgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc8h3_bgb"/>`,
		"fallback": "typcn:vendor-microsoft",
	});
}

export default Component;
