import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3ikrgvqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3ikrgvqi"/>`,
		"fallback": "mingcute:wallet-3-fill",
	});
}

export default Component;
