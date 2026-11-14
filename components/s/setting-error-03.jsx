import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rlmmikbvq.css';
import '../../css/a/a_ymkgbmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rlmmikbvq"/><path class="a_ymkgbmb"/></g>`,
		"fallback": "hugeicons:setting-error-03",
	});
}

export default Component;
