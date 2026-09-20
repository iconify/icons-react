import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzy313b0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzy313b0p"/>`,
		"fallback": "ri:layout-grid-fill",
	});
}

export default Component;
