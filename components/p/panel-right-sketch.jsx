import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qc670fb8v.css';
import '../../css/h/hausojmrr.css';
import '../../css/c/cdb9mdikz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qc670fb8v wm-a"/><path class="hausojmrr wm-k"/><path class="cdb9mdikz wm-k"/></g>`,
		"fallback": "withicons:panel-right-sketch",
	});
}

export default Component;
