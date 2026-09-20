import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1mi8z8gu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1mi8z8gu"/>`,
		"fallback": "selfhst:send-visee",
	});
}

export default Component;
