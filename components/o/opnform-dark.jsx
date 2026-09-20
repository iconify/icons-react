import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p220ddb0m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p220ddb0m"/>`,
		"fallback": "selfhst:opnform-dark",
	});
}

export default Component;
