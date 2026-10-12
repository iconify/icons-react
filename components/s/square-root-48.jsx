import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m61ifcb6j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m61ifcb6j"/>`,
		"fallback": "energy-icons:square-root-48",
	});
}

export default Component;
