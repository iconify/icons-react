import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvekm43jx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvekm43jx"/>`,
		"fallback": "energy-icons:tsunami-48",
	});
}

export default Component;
