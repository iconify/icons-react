import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lt87iveio.css';
import '../../css/m/migl5jbsu.css';
import '../../css/b/beaeuqbls.css';
import '../../css/i/ip-kvve8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lt87iveio"/><path class="migl5jbsu"/><path class="beaeuqbls"/><path class="ip-kvve8g"/></g>`,
		"fallback": "solar:siderbar-line-duotone",
	});
}

export default Component;
