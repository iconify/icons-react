import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa1b8rrtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa1b8rrtr"/>`,
		"fallback": "keyline-icons:message-sharp-duotone",
	});
}

export default Component;
