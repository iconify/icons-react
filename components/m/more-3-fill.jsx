import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/assb7o9lv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="assb7o9lv"/>`,
		"fallback": "mingcute:more-3-fill",
	});
}

export default Component;
