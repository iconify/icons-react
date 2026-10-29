import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w4dem-b-z.css';
import '../../css/a/aogbohb-z.css';
import '../../css/o/ow8ez-lyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="w4dem-b-z"/><path class="aogbohb-z wm-shadow"/><path class="ow8ez-lyq"/></g>`,
		"fallback": "withicons:layout-dashboard-engrave",
	});
}

export default Component;
