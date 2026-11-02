import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sodb7pimc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sodb7pimc"/>`,
		"fallback": "mingcute:vue-fill",
	});
}

export default Component;
