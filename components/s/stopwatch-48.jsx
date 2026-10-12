import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7474gbcq.css';
import '../../css/f/fk4kw9brn.css';
import '../../css/k/knmmfib1t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7474gbcq"/><path class="fk4kw9brn"/><path class="knmmfib1t"/>`,
		"fallback": "energy-icons:stopwatch-48",
	});
}

export default Component;
