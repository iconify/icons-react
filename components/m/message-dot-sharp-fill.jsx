import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sql9n1bco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sql9n1bco"/>`,
		"fallback": "keyline-icons:message-dot-sharp-fill",
	});
}

export default Component;
