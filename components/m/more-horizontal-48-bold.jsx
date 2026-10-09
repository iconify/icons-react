import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j45fmlboe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j45fmlboe"/>`,
		"fallback": "energy-icons:more-horizontal-48-bold",
	});
}

export default Component;
