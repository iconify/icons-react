import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdblbht-m.css';
import '../../css/y/yjqp6ojwn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdblbht-m"/><path class="yjqp6ojwn"/>`,
		"fallback": "selfhst:postal-light",
	});
}

export default Component;
