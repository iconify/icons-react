import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0lt8rbdk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0lt8rbdk"/>`,
		"fallback": "energy-icons:leak-48",
	});
}

export default Component;
