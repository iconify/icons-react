import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lghfbwbad.css';
import '../../css/f/f_ilzosws.css';
import '../../css/l/lqfqjbb0r.css';
import '../../css/p/ppqxdzqbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lghfbwbad"/><path class="f_ilzosws"/><path class="lqfqjbb0r"/><path class="ppqxdzqbu"/></g>`,
		"fallback": "solar:sort-from-bottom-to-top-linear",
	});
}

export default Component;
