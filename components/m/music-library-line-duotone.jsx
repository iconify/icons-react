import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ea_31gbnm.css';
import '../../css/u/u9_hwpzmi.css';
import '../../css/v/vnsop5_4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ea_31gbnm"/><path class="u9_hwpzmi"/><path class="vnsop5_4w"/></g>`,
		"fallback": "solar:music-library-line-duotone",
	});
}

export default Component;
