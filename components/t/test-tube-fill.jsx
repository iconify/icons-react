import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpjb55bxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpjb55bxz"/>`,
		"fallback": "mingcute:test-tube-fill",
	});
}

export default Component;
