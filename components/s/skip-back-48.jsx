import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7w6f-o8y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7w6f-o8y"/>`,
		"fallback": "energy-icons:skip-back-48",
	});
}

export default Component;
