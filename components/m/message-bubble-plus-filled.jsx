import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lslr_dbur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lslr_dbur"/>`,
		"fallback": "boxicons:message-bubble-plus-filled",
	});
}

export default Component;
