import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x-fwwxnnq.css';
import '../../css/n/nq1-nx3hy.css';
import '../../css/u/u4d7iubqc.css';
import '../../css/t/tyeudgo-p.css';
import '../../css/f/f_gnyccij.css';
import '../../css/o/ooa4bcz7c.css';
import '../../css/u/u28tryxkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="x-fwwxnnq"/><path class="nq1-nx3hy wm-k"/><path class="u4d7iubqc wm-a"/><path class="tyeudgo-p wm-s"/><path class="f_gnyccij wm-k"/><path class="ooa4bcz7c wm-a"/><path class="u28tryxkt wm-s"/></g>`,
		"fallback": "withicons:notebook-pen-sketch",
	});
}

export default Component;
