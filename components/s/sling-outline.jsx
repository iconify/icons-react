import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohg2owb1n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ohg2owb1n"/>`,
		"fallback": "healthicons:sling-outline",
	});
}

export default Component;
