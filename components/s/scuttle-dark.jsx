import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkfdg3zno.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkfdg3zno"/>`,
		"fallback": "selfhst:scuttle-dark",
	});
}

export default Component;
