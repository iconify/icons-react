import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bu-wovbql.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bu-wovbql"/>`,
		"fallback": "selfhst:simplex-chat-dark",
	});
}

export default Component;
