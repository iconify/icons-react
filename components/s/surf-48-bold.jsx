import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu6ys3bzz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu6ys3bzz"/>`,
		"fallback": "energy-icons:surf-48-bold",
	});
}

export default Component;
