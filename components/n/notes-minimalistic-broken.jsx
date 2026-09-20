import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/ncaw82bqt.css';
import '../../css/h/h995enbdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ncaw82bqt"/><path class="h995enbdd"/></g>`,
		"fallback": "solar:notes-minimalistic-broken",
	});
}

export default Component;
