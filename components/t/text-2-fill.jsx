import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkhnqjboq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkhnqjboq"/>`,
		"fallback": "mingcute:text-2-fill",
	});
}

export default Component;
