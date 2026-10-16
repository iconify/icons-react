import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em_gclcem.css';
import '../../css/n/nfttrft0r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="em_gclcem"/><path class="nfttrft0r"/>`,
		"fallback": "energy-icons:route-48",
	});
}

export default Component;
