import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce0cywmuu.css';
import '../../css/c/cmhn4ab9f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ce0cywmuu"/><path class="cmhn4ab9f"/>`,
		"fallback": "energy-icons:shield-user-48-bold",
	});
}

export default Component;
