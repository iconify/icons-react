import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4zi-4u_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v4zi-4u_c"/>`,
		"fallback": "keyline-icons:square-bar-chart-horizontal-end-sharp-fill",
	});
}

export default Component;
