import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es8pyblwu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es8pyblwu"/>`,
		"fallback": "energy-icons:user-minus-48",
	});
}

export default Component;
