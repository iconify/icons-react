import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/y_cprfkpo.css';
import '../../css/c/chucnnbnc.css';
import '../../css/q/qt3_ghwjq.css';
import '../../css/v/vg2dc9z-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k y_cprfkpo"/><path class="chucnnbnc wm-shadow"/><path class="qt3_ghwjq wm-k"/><path class="vg2dc9z-o wm-a"/></g>`,
		"fallback": "withicons:jalebi-engrave",
	});
}

export default Component;
