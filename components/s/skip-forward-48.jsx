import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy4sow8xf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uy4sow8xf"/>`,
		"fallback": "energy-icons:skip-forward-48",
	});
}

export default Component;
