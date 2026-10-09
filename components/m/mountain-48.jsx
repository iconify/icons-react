import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d33itbbpi.css';
import '../../css/j/jbxq4-b5q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d33itbbpi"/><path class="jbxq4-b5q"/>`,
		"fallback": "energy-icons:mountain-48",
	});
}

export default Component;
