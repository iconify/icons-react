import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj_1-1b-d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oj_1-1b-d"/>`,
		"fallback": "energy-icons:sun-dim-48-bold",
	});
}

export default Component;
