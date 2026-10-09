import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/neup3sbey.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="neup3sbey"/>`,
		"fallback": "energy-icons:sun-dim-48",
	});
}

export default Component;
