import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e69it0bqa.css';
import '../../css/a/ad76n-bro.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e69it0bqa"/><path class="ad76n-bro"/>`,
		"fallback": "selfhst:password-pusher-light",
	});
}

export default Component;
