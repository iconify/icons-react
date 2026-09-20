import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqh5xmk8q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqh5xmk8q"/>`,
		"fallback": "selfhst:nextbeats-dark",
	});
}

export default Component;
