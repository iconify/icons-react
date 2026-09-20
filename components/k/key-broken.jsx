import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gkg_hhwxl.css';
import '../../css/i/i2s195bys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gkg_hhwxl"/><path class="i2s195bys"/></g>`,
		"fallback": "solar:key-broken",
	});
}

export default Component;
