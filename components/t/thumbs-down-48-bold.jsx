import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqif18inc.css';
import '../../css/u/u2-y_cc6i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqif18inc"/><path class="u2-y_cc6i"/>`,
		"fallback": "energy-icons:thumbs-down-48-bold",
	});
}

export default Component;
