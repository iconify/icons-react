import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l9khuwb9i.css';
import '../../css/n/njptybbfv.css';
import '../../css/n/nqru_n_7g.css';
import '../../css/q/qy7-phkvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="l9khuwb9i"/><path class="njptybbfv wm-k"/><path class="nqru_n_7g wm-k"/><path class="qy7-phkvw wm-a"/></g>`,
		"fallback": "withicons:layout-list-sketch",
	});
}

export default Component;
