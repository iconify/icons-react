import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grvmx1blx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grvmx1blx"/>`,
		"fallback": "mdi-light:message-alert",
	});
}

export default Component;
