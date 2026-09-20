import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yue559bgm.css';
import '../../css/u/uo6__lbiq.css';
import '../../css/g/gshkn9qqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yue559bgm"/><path class="uo6__lbiq"/><path class="gshkn9qqt"/></g>`,
		"fallback": "solar:move-circle-line-duotone",
	});
}

export default Component;
