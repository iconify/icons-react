import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4s6aob2m.css';
import '../../css/n/n0xyitehn.css';
import '../../css/w/w3e274hyt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4s6aob2m"/><path class="n0xyitehn"/><path class="w3e274hyt"/>`,
		"fallback": "energy-icons:running-48",
	});
}

export default Component;
