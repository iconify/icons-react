import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/asn38kb9q.css';
import '../../css/u/u4d-mh8hw.css';
import '../../css/g/gqr-fjz3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="asn38kb9q"/><path class="u4d-mh8hw wm-shadow"/><path class="gqr-fjz3v"/></g>`,
		"fallback": "withicons:square-dashed-engrave",
	});
}

export default Component;
