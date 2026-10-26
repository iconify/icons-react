import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4zl2bc_r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4zl2bc_r"/>`,
		"fallback": "doodle-icons:text-align-start",
	});
}

export default Component;
