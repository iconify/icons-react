import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkmlt_lmx.css';
import '../../css/m/m4o-xp_cr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkmlt_lmx"/><path class="m4o-xp_cr"/>`,
		"fallback": "energy-icons:nozzle-20",
	});
}

export default Component;
