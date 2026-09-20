import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv5fhxp1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv5fhxp1n"/>`,
		"fallback": "lets-icons:vertical-switch-light",
	});
}

export default Component;
