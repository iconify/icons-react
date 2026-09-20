import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ou-q0db-s.css';
import '../../css/o/oo4oedcbq.css';
import '../../css/z/zbpan-bvy.css';
import '../../css/y/yebcb12-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ou-q0db-s"/><path class="oo4oedcbq"/><path class="zbpan-bvy"/><path class="yebcb12-h"/></g>`,
		"fallback": "solar:magnet-wave-line-duotone",
	});
}

export default Component;
