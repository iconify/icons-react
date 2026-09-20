import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhicr5bdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhicr5bdw"/>`,
		"fallback": "keyline-icons:message-off-sharp",
	});
}

export default Component;
