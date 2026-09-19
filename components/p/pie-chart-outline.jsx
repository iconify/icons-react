import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckanf-3yy.css';
import '../../css/h/h-c11pbsf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckanf-3yy"/><path class="h-c11pbsf"/>`,
		"fallback": "famicons:pie-chart-outline",
	});
}

export default Component;
