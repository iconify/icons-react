import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnt-fab5e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnt-fab5e"/>`,
		"fallback": "selfhst:rwmarkable-dark",
	});
}

export default Component;
