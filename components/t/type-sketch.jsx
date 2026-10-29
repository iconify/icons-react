import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g5ps4wb3c.css';
import '../../css/v/vrn_zwi2z.css';
import '../../css/w/w574b0b2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="g5ps4wb3c wm-k"/><path class="vrn_zwi2z wm-k"/><path class="w574b0b2r wm-a"/></g>`,
		"fallback": "withicons:type-sketch",
	});
}

export default Component;
