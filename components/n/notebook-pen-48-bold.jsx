import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxyn2mbuu.css';
import '../../css/l/l5s4u6bdo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxyn2mbuu"/><path class="l5s4u6bdo"/>`,
		"fallback": "energy-icons:notebook-pen-48-bold",
	});
}

export default Component;
