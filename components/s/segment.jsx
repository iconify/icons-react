import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c_a_osb6t.css';
import '../../css/w/w8wnakb3s.css';
import '../../css/z/z4ubyo-3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c_a_osb6t"/><path class="w8wnakb3s"/><path class="z4ubyo-3v"/></g>`,
		"fallback": "hugeicons:segment",
	});
}

export default Component;
