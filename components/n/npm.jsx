import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8h_d6hpm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8h_d6hpm"/>`,
		"fallback": "material-icon-theme:npm",
	});
}

export default Component;
