import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/peds29b1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="peds29b1i"/>`,
		"fallback": "mingcute:layout-bottom-open-fill",
	});
}

export default Component;
