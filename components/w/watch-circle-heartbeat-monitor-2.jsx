import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/obk7bu9fn.css';
import '../../css/d/da956ozzh.css';
import '../../css/e/eixxqsdrl.css';
import '../../css/q/qo3k9bbgr.css';
import '../../css/v/vxa74gbda.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="obk7bu9fn"/><path class="da956ozzh"/><path class="eixxqsdrl"/><path class="qo3k9bbgr"/><path class="vxa74gbda"/></g>`,
		"fallback": "streamline-color:watch-circle-heartbeat-monitor-2",
	});
}

export default Component;
