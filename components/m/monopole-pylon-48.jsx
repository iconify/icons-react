import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-l0jd7mu.css';
import '../../css/r/rt3djzbaq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-l0jd7mu"/><path class="rt3djzbaq"/>`,
		"fallback": "energy-icons:monopole-pylon-48",
	});
}

export default Component;
