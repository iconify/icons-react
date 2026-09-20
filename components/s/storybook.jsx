import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6_q2dyiy.css';
import '../../css/q/q2inojbkd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6_q2dyiy"/><path class="q2inojbkd"/>`,
		"fallback": "selfhst:storybook",
	});
}

export default Component;
