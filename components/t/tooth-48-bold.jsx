import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3yu5jvhw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3yu5jvhw"/>`,
		"fallback": "energy-icons:tooth-48-bold",
	});
}

export default Component;
