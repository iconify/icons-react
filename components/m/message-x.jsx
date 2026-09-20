import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd82nybwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd82nybwu"/>`,
		"fallback": "tabler:message-x",
	});
}

export default Component;
