import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8l5l3cxn.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8l5l3cxn"/>`,
		"fallback": "whh:lock",
	});
}

export default Component;
