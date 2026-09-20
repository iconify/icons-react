import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcn9u5-6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcn9u5-6y"/>`,
		"fallback": "mingcute:mingcute-fill",
	});
}

export default Component;
