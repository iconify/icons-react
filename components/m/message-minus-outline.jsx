import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmz93sk0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmz93sk0o"/>`,
		"fallback": "mdi:message-minus-outline",
	});
}

export default Component;
