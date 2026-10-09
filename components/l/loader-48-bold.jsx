import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2bvvkbzv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2bvvkbzv"/>`,
		"fallback": "energy-icons:loader-48-bold",
	});
}

export default Component;
