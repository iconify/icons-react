import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwbi8czbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwbi8czbv"/>`,
		"fallback": "hugeicons:layout-template",
	});
}

export default Component;
