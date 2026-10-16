import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd9ctrbds.css';
import '../../css/h/h-zg-r21y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dd9ctrbds"/><path class="h-zg-r21y"/>`,
		"fallback": "energy-icons:subscript-48-bold",
	});
}

export default Component;
