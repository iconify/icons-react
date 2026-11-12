import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lg2jjbcjj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lg2jjbcjj"/>`,
		"fallback": "selfhst:minimus-light",
	});
}

export default Component;
