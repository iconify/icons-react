import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5wzb1xmq.css';
import '../../css/q/q3gqlvbsr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5wzb1xmq"/><path class="q3gqlvbsr"/>`,
		"fallback": "selfhst:mergeable",
	});
}

export default Component;
