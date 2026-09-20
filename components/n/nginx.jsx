import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs9nrxbwo.css';
import '../../css/i/ifixufl1e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs9nrxbwo"/><path class="ifixufl1e"/>`,
		"fallback": "selfhst:nginx",
	});
}

export default Component;
