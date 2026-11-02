import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue9d2bbun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue9d2bbun"/>`,
		"fallback": "mingcute:leaf-3-fill",
	});
}

export default Component;
