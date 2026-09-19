import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zfxrd8b9z.css';
import '../../css/i/i8n6q-sjq.css';
import '../../css/m/mv-txmbcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zfxrd8b9z"/><path class="i8n6q-sjq"/><path class="mv-txmbcc"/></g>`,
		"fallback": "hugeicons:passport-valid",
	});
}

export default Component;
