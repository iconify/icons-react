import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3z8fdb5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3z8fdb5f"/>`,
		"fallback": "mingcute:kingkey-100-tower-fill",
	});
}

export default Component;
