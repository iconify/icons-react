import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri15mwhnp.css';
import '../../css/q/qjx3e9jap.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ri15mwhnp"/><path class="qjx3e9jap"/>`,
		"fallback": "selfhst:our-shopping-list-dark",
	});
}

export default Component;
