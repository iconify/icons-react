import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mte_34_1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mte_34_1u"/>`,
		"fallback": "mingcute:up-small-line",
	});
}

export default Component;
