import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2mz6fbaj.css';
import '../../css/l/loq84tx7i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2mz6fbaj"/><path class="loq84tx7i"/>`,
		"fallback": "energy-icons:rupee-48",
	});
}

export default Component;
