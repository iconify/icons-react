import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iq1cssb6m.css';
import '../../css/e/ef6i17ddi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iq1cssb6m"/><path class="ef6i17ddi"/>`,
		"fallback": "energy-icons:ladle-48",
	});
}

export default Component;
