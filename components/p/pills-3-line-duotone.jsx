import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hqpl1bcby.css';
import '../../css/e/egzhicj_c.css';
import '../../css/p/p1tpmgbyh.css';
import '../../css/h/h6_ngrzeb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hqpl1bcby"/><path class="egzhicj_c"/><path class="p1tpmgbyh"/><path class="h6_ngrzeb"/></g>`,
		"fallback": "solar:pills-3-line-duotone",
	});
}

export default Component;
