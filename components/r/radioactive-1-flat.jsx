import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ll0cpu1pj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ll0cpu1pj"/>`,
		"fallback": "streamline-plump-color:radioactive-1-flat",
	});
}

export default Component;
