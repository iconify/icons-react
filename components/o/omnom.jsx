import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3n-n5b1t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3n-n5b1t"/>`,
		"fallback": "selfhst:omnom",
	});
}

export default Component;
