import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjasyob6c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjasyob6c"/>`,
		"fallback": "selfhst:payram",
	});
}

export default Component;
