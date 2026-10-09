import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta0lh091l.css';
import '../../css/t/tghfhx41n.css';
import '../../css/k/k_v0_2fwl.css';
import '../../css/e/el6foowsg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ta0lh091l"/><path class="tghfhx41n"/><path class="k_v0_2fwl"/><path class="el6foowsg"/>`,
		"fallback": "energy-icons:investment-48-bold",
	});
}

export default Component;
