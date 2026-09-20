import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omesdvb-v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omesdvb-v"/>`,
		"fallback": "selfhst:reddit-upvote-light",
	});
}

export default Component;
