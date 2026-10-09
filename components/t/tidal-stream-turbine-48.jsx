import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfm2ybc6q.css';
import '../../css/s/szotk6bxo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfm2ybc6q"/><path class="szotk6bxo"/>`,
		"fallback": "energy-icons:tidal-stream-turbine-48",
	});
}

export default Component;
