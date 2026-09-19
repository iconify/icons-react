import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j_wl4muaa.css';
import '../../css/s/sfl56ghid.css';
import '../../css/q/qvc-_-b4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="j_wl4muaa"/><path class="sfl56ghid"/><path class="qvc-_-b4f"/></g>`,
		"fallback": "hugeicons:sun-cloud-fast-wind-01",
	});
}

export default Component;
