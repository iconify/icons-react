import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdh5bcc2z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdh5bcc2z"/>`,
		"fallback": "radix-icons:link-break-1",
	});
}

export default Component;
