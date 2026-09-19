import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/jumo7rhsr.css';
import '../../css/s/s14k80bdn.css';
import '../../css/d/dwwf5fjpm.css';
import '../../css/m/mca3ekbcz.css';
import '../../css/l/l-pi_cb3q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="jumo7rhsr"/><rect class="s14k80bdn"/><path class="dwwf5fjpm"/><path class="mca3ekbcz"/><path class="l-pi_cb3q"/></g>`,
		"fallback": "icon-park:message-privacy",
	});
}

export default Component;
