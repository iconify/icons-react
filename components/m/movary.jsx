import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzuuxyv1b.css';
import '../../css/e/e9w0n4t1u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzuuxyv1b"/><path class="e9w0n4t1u"/>`,
		"fallback": "selfhst:movary",
	});
}

export default Component;
