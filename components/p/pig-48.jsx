import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk88l0bcp.css';
import '../../css/j/jmxzkobyc.css';
import '../../css/q/qr7io5b1m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk88l0bcp"/><path class="jmxzkobyc"/><path class="qr7io5b1m"/>`,
		"fallback": "energy-icons:pig-48",
	});
}

export default Component;
