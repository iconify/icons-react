import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifhxd1b9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifhxd1b9w"/>`,
		"fallback": "keyline-icons:message-square-lines-sharp-fill",
	});
}

export default Component;
