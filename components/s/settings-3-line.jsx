import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tekxwr7wn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tekxwr7wn"/>`,
		"fallback": "mingcute:settings-3-line",
	});
}

export default Component;
