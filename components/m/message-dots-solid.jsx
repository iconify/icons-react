import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qn2oh2b2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qn2oh2b2x"/>`,
		"fallback": "flowbite:message-dots-solid",
	});
}

export default Component;
