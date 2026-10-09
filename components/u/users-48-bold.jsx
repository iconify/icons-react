import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia2yv5bfn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia2yv5bfn"/>`,
		"fallback": "energy-icons:users-48-bold",
	});
}

export default Component;
