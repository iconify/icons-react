import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/jumo7rhsr.css';
import '../../css/m/mca3ekbcz.css';
import '../../css/l/l-pi_cb3q.css';
import '../../css/h/hijxq85yf.css';
import '../../css/s/s3j7utbrh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="jumo7rhsr"/><path class="mca3ekbcz"/><path class="l-pi_cb3q"/><path class="hijxq85yf"/><path class="s3j7utbrh"/></g>`,
		"fallback": "icon-park:message-failed",
	});
}

export default Component;
