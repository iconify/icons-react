import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd-5y7buj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cd-5y7buj"/>`,
		"fallback": "energy-icons:signal-medium-48-bold",
	});
}

export default Component;
