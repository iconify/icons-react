import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnzw39bif.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnzw39bif"/>`,
		"fallback": "doodle-icons:star",
	});
}

export default Component;
