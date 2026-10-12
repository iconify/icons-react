import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmhcx3b_c.css';
import '../../css/k/kvl9ucc0s.css';
import '../../css/t/ttinssb5v.css';
import '../../css/e/ed4mxccbx.css';
import '../../css/e/eqdr87b3l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmhcx3b_c"/><path class="kvl9ucc0s"/><path class="ttinssb5v"/><path class="ed4mxccbx"/><path class="eqdr87b3l"/>`,
		"fallback": "energy-icons:monitor-x-20",
	});
}

export default Component;
