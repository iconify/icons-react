import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpzvbnz3y.css';
import '../../css/t/tkao4yftb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="vpzvbnz3y"/><path class="tkao4yftb"/>`,
		"fallback": "selfhst:plain-week",
	});
}

export default Component;
