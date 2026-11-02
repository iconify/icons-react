import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj4g-wbrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nj4g-wbrt"/>`,
		"fallback": "mingcute:radiobox-fill",
	});
}

export default Component;
