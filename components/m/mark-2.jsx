import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vj1q8pbne.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vj1q8pbne"/>`,
		"fallback": "subway:mark-2",
	});
}

export default Component;
