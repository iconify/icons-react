import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdnq6pbqs.css';
import '../../css/i/i4drks1lj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdnq6pbqs"/><path class="i4drks1lj"/>`,
		"fallback": "energy-icons:text-color-48",
	});
}

export default Component;
