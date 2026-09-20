import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yho0q7j2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yho0q7j2b"/>`,
		"fallback": "mingcute:large-arrow-down-fill",
	});
}

export default Component;
