import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-4so2v2c.css';

const viewBox = {"width":1024,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-4so2v2c"/>`,
		"fallback": "whh:shoppingbag",
	});
}

export default Component;
