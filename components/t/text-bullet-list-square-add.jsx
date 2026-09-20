import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w6jdv5xki.css';
import '../../css/k/kspk4_oeg.css';
import '../../css/l/lav_9-bkq.css';
import '../../css/a/ax30oiq0a.css';
import '../../css/w/ws3epr_kb.css';
import '../../css/q/qyx4mxedf.css';
import '../../css/h/h32jkxbzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="w6jdv5xki"/><path class="kspk4_oeg"/><circle class="lav_9-bkq"/><path class="ax30oiq0a"/><circle class="ws3epr_kb"/><path class="qyx4mxedf"/><path clip-rule="evenodd" class="h32jkxbzn"/></g>`,
		"fallback": "proicons:text-bullet-list-square-add",
	});
}

export default Component;
