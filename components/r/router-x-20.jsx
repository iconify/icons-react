import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmy4bkbyv.css';
import '../../css/m/mh8yf9b3b.css';
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
		"content": `<path class="tmy4bkbyv"/><path class="mh8yf9b3b"/><path class="ed4mxccbx"/><path class="eqdr87b3l"/>`,
		"fallback": "energy-icons:router-x-20",
	});
}

export default Component;
