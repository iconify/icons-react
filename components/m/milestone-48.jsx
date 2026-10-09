import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slkapwbis.css';
import '../../css/t/tb36haboa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slkapwbis"/><path class="tb36haboa"/>`,
		"fallback": "energy-icons:milestone-48",
	});
}

export default Component;
