import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q87b2fv6c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q87b2fv6c"/>`,
		"fallback": "ix:topic-filled",
	});
}

export default Component;
