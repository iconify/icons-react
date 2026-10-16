import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj6wo8kgl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oj6wo8kgl"/>`,
		"fallback": "energy-icons:stairs-48-bold",
	});
}

export default Component;
