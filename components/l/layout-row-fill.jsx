import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lctz0c0bf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lctz0c0bf"/>`,
		"fallback": "ri:layout-row-fill",
	});
}

export default Component;
