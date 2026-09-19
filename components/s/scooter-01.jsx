import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/l35j0e94n.css';
import '../../css/c/c0gc0ob6r.css';
import '../../css/b/bcj4t0buj.css';
import '../../css/c/cnc8kxp4p.css';
import '../../css/q/q7ybb3p4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="l35j0e94n"/><path class="c0gc0ob6r"/><path class="bcj4t0buj"/><circle class="cnc8kxp4p"/><path class="q7ybb3p4z"/></g>`,
		"fallback": "hugeicons:scooter-01",
	});
}

export default Component;
