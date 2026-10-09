import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_knjioaa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_knjioaa"/>`,
		"fallback": "energy-icons:minus-48",
	});
}

export default Component;
