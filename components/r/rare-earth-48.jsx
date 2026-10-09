import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e43ajkbyn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e43ajkbyn"/>`,
		"fallback": "energy-icons:rare-earth-48",
	});
}

export default Component;
