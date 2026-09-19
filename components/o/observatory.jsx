import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esxpy3bry.css';

const viewBox = {"width":1024,"height":916};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esxpy3bry"/>`,
		"fallback": "whh:observatory",
	});
}

export default Component;
