import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gd0toxw3n.css';
import '../../css/e/e_hc3taxx.css';
import '../../css/f/fz88cgg4i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gd0toxw3n"/><path class="e_hc3taxx"/><path class="fz88cgg4i"/>`,
		"fallback": "energy-icons:log-out-20",
	});
}

export default Component;
