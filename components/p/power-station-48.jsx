import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1j5nsboq.css';
import '../../css/p/pwrb__blp.css';
import '../../css/q/qrfic8bvi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1j5nsboq"/><path class="pwrb__blp"/><path class="qrfic8bvi"/>`,
		"fallback": "energy-icons:power-station-48",
	});
}

export default Component;
