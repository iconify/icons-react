import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/delp84bwu.css';
import '../../css/a/a2-6c9lfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="delp84bwu"/><path class="a2-6c9lfp"/></g>`,
		"fallback": "solar:screencast-2-broken",
	});
}

export default Component;
