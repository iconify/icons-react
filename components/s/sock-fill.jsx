import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/boi1onnnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="boi1onnnp"/>`,
		"fallback": "mingcute:sock-fill",
	});
}

export default Component;
