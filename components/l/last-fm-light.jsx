import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ows--s8kj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ows--s8kj"/>`,
		"fallback": "selfhst:last-fm-light",
	});
}

export default Component;
