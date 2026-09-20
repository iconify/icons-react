import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4i5z2h2q.css';
import '../../css/c/c4uvzi6dm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="j4i5z2h2q"/><path class="c4uvzi6dm"/>`,
		"fallback": "selfhst:pushover",
	});
}

export default Component;
