import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vw_3nbc9h.css';
import '../../css/r/r1ahr6bce.css';
import '../../css/g/geoy4rbnm.css';
import '../../css/v/v5olznbck.css';
import '../../css/v/vlgjcopth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vw_3nbc9h"/><path class="r1ahr6bce"/><path class="geoy4rbnm"/><path class="v5olznbck"/><path class="vlgjcopth"/></g>`,
		"fallback": "streamline-ultimate-color:programming-language-monitor-css",
	});
}

export default Component;
