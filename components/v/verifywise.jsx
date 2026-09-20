import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eeybvhwms.css';
import '../../css/j/jv6twq_6q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eeybvhwms"/><path class="jv6twq_6q"/>`,
		"fallback": "selfhst:verifywise",
	});
}

export default Component;
