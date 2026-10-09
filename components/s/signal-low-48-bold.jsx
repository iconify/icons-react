import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9sm63b6y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9sm63b6y"/>`,
		"fallback": "energy-icons:signal-low-48-bold",
	});
}

export default Component;
