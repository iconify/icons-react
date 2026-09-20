import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myha_s0_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="myha_s0_i"/>`,
		"fallback": "mingcute:scissors-2-fill",
	});
}

export default Component;
