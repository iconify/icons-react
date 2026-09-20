import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxc0_evgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxc0_evgk"/>`,
		"fallback": "mingcute:textbox-line",
	});
}

export default Component;
