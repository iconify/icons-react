import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mmqlpiqfo.css';
import '../../css/m/memzlwbyy.css';
import '../../css/b/bvwl46b5l.css';
import '../../css/w/wx0gwswyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mmqlpiqfo wm-k"/><path class="memzlwbyy wm-s"/><path class="bvwl46b5l wm-k"/><path class="wm-s wx0gwswyg"/></g>`,
		"fallback": "withicons:star-off-sketch",
	});
}

export default Component;
