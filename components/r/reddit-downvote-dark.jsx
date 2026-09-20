import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbwfuo6tt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbwfuo6tt"/>`,
		"fallback": "selfhst:reddit-downvote-dark",
	});
}

export default Component;
