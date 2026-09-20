import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aomeu167z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aomeu167z"/>`,
		"fallback": "mage:message-square-fill",
	});
}

export default Component;
