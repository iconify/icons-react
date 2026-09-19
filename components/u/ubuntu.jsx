import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r38q_w2xd.css';

const viewBox = {"width":1024,"height":1029};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r38q_w2xd"/>`,
		"fallback": "whh:ubuntu",
	});
}

export default Component;
