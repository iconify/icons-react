import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a52e49pvx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a52e49pvx"/>`,
		"fallback": "selfhst:taskade-dark",
	});
}

export default Component;
