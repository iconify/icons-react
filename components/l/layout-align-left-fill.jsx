import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iuz27zgrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iuz27zgrx"/>`,
		"fallback": "mingcute:layout-align-left-fill",
	});
}

export default Component;
