import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oatcgvais.css';
import '../../css/l/lm_vypbga.css';
import '../../css/q/q61qoubtu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oatcgvais"/><path class="lm_vypbga"/><path class="q61qoubtu"/>`,
		"fallback": "energy-icons:rov-48-bold",
	});
}

export default Component;
