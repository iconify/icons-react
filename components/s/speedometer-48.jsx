import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_r7mhbff.css';
import '../../css/n/nrcinobha.css';
import '../../css/r/rvdcy0bsg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_r7mhbff"/><path class="nrcinobha"/><path class="rvdcy0bsg"/>`,
		"fallback": "energy-icons:speedometer-48",
	});
}

export default Component;
