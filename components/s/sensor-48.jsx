import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tofpwqbpz.css';
import '../../css/i/i96afluhf.css';
import '../../css/c/cq3in7biq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tofpwqbpz"/><path class="i96afluhf"/><path class="cq3in7biq"/>`,
		"fallback": "energy-icons:sensor-48",
	});
}

export default Component;
