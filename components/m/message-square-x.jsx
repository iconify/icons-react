import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yal5rtb8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yal5rtb8k"/>`,
		"fallback": "bxs:message-square-x",
	});
}

export default Component;
