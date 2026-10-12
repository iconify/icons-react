import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxr2twvpp.css';
import '../../css/e/ebng-2bre.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxr2twvpp"/><path class="ebng-2bre"/>`,
		"fallback": "energy-icons:pill-bottle-48-bold",
	});
}

export default Component;
