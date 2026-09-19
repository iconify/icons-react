import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhlh9ibto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhlh9ibto"/>`,
		"fallback": "boxicons:message-bubble-edit-filled",
	});
}

export default Component;
