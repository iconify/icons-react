import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijr-y-b0z.css';

const viewBox = {"width":1024,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijr-y-b0z"/>`,
		"fallback": "whh:stiletto",
	});
}

export default Component;
