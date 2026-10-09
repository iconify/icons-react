import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xr4v5jaad.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xr4v5jaad"/>`,
		"fallback": "energy-icons:radiation-48",
	});
}

export default Component;
