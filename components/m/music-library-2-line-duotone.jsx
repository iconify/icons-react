import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vnsop5_4w.css';
import '../../css/j/je9pe87ui.css';
import '../../css/e/ea_31gbnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vnsop5_4w"/><path class="je9pe87ui"/><path class="ea_31gbnm"/></g>`,
		"fallback": "solar:music-library-2-line-duotone",
	});
}

export default Component;
