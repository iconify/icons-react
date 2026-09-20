import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chrsyeb_q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chrsyeb_q"/>`,
		"fallback": "selfhst:microsoft-powerpoint-2013-dark",
	});
}

export default Component;
