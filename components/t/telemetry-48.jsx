import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl9bja3bz.css';
import '../../css/r/rp0ywbdoi.css';
import '../../css/f/f99glvbde.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cl9bja3bz"/><path class="rp0ywbdoi"/><path class="f99glvbde"/>`,
		"fallback": "energy-icons:telemetry-48",
	});
}

export default Component;
