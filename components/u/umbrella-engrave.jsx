import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w_umu3q7p.css';
import '../../css/d/djpm-nbqp.css';
import '../../css/w/wgaw3djmi.css';
import '../../css/r/rxypl7oqe.css';
import '../../css/g/gtohkybxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="w_umu3q7p wm-k"/><path class="djpm-nbqp wm-a"/><path class="wgaw3djmi wm-shadow"/><path class="rxypl7oqe wm-k"/><path class="gtohkybxy wm-a"/></g>`,
		"fallback": "withicons:umbrella-engrave",
	});
}

export default Component;
