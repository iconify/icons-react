import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wwbmwgcaj.css';
import '../../css/e/euy-t2dpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wwbmwgcaj"/><path class="euy-t2dpm"/></g>`,
		"fallback": "hugeicons:road",
	});
}

export default Component;
