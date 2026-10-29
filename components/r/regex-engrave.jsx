import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cagecrcfk.css';
import '../../css/w/woz2f9b9j.css';
import '../../css/c/caw5qabew.css';
import '../../css/a/a74ox2l4b.css';
import '../../css/l/l-if2ibsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="cagecrcfk wm-k"/><path class="wm-a woz2f9b9j"/><path class="caw5qabew wm-shadow"/><path class="a74ox2l4b wm-k"/><path class="l-if2ibsb wm-a"/></g>`,
		"fallback": "withicons:regex-engrave",
	});
}

export default Component;
