import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh9qq4ypa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh9qq4ypa"/>`,
		"fallback": "keyline-icons:message-square-off-sharp",
	});
}

export default Component;
