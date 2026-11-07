import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qcdvqs90r.css';
import '../../css/n/n40-rtb4q.css';
import '../../css/s/si_mtzbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qcdvqs90r"/><path class="n40-rtb4q"/><path class="si_mtzbvj"/></g>`,
		"fallback": "solar:send-square-broken",
	});
}

export default Component;
