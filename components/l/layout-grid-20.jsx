import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4v-c_q2d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4v-c_q2d"/>`,
		"fallback": "energy-icons:layout-grid-20",
	});
}

export default Component;
