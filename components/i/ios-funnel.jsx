import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4_09-bdh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4_09-bdh"/>`,
		"fallback": "ion:ios-funnel",
	});
}

export default Component;
