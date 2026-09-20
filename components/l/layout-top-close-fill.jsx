import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo9n361qe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo9n361qe"/>`,
		"fallback": "mingcute:layout-top-close-fill",
	});
}

export default Component;
