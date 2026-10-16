import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9ufck1xu.css';
import '../../css/o/oc4c5hbmp.css';
import '../../css/q/qdytrdbev.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9ufck1xu"/><path class="oc4c5hbmp"/><path class="qdytrdbev"/>`,
		"fallback": "energy-icons:solar-farm-check-48",
	});
}

export default Component;
