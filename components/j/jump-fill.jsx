import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb71i3b-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lb71i3b-u"/>`,
		"fallback": "mingcute:jump-fill",
	});
}

export default Component;
