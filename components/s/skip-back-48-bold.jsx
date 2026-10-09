import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qn6as_b4v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qn6as_b4v"/>`,
		"fallback": "energy-icons:skip-back-48-bold",
	});
}

export default Component;
