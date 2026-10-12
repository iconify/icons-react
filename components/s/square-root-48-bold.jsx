import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt31cubbw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jt31cubbw"/>`,
		"fallback": "energy-icons:square-root-48-bold",
	});
}

export default Component;
