import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nutl8r-hu.css';
import '../../css/t/tag43drpl.css';
import '../../css/i/icr6l4b5p.css';
import '../../css/d/dds8dacon.css';
import '../../css/m/mbnbiobpz.css';
import '../../css/l/lu-kft6oz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="nutl8r-hu wm-k"/><path class="tag43drpl wm-a"/><path class="icr6l4b5p wm-shadow"/><path class="dds8dacon wm-k"/><path class="mbnbiobpz wm-a"/><path class="lu-kft6oz wm-a"/></g>`,
		"fallback": "withicons:layers-engrave",
	});
}

export default Component;
