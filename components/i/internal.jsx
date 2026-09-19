import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f83lo_bbe.css';
import '../../css/n/nnd46w4ky.css';
import '../../css/h/hd4_l7bgy.css';
import '../../css/e/e04d3abid.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="f83lo_bbe"/><g class="nnd46w4ky"><path class="hd4_l7bgy"/><path class="e04d3abid"/></g>`,
		"fallback": "flat-color-icons:internal",
	});
}

export default Component;
