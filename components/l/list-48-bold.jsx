import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-p1p0bqc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-p1p0bqc"/>`,
		"fallback": "energy-icons:list-48-bold",
	});
}

export default Component;
