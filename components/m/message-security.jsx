import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/jumo7rhsr.css';
import '../../css/c/c1piv-2lj.css';
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
		"content": `<g class="rggfaqb6e"><path class="jumo7rhsr"/><path class="c1piv-2lj"/><path class="mca3ekbcz"/><path class="l-pi_cb3q"/></g>`,
		"fallback": "icon-park:message-security",
	});
}

export default Component;
