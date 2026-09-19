import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/iq0pnlbab.css';
import '../../css/z/z923srsnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="iq0pnlbab"/><path class="z923srsnc"/></g>`,
		"fallback": "hugeicons:mp-302",
	});
}

export default Component;
