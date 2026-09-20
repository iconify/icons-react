import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti86nvoen.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti86nvoen"/>`,
		"fallback": "selfhst:seq-dark",
	});
}

export default Component;
