import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp-8xbcar.css';
import '../../css/g/gkoq5rb_y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp-8xbcar"/><path class="gkoq5rb_y"/>`,
		"fallback": "energy-icons:solar-inverter-48",
	});
}

export default Component;
