import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqmmymb5e.css';
import '../../css/f/fy2fydtce.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqmmymb5e"/><path class="fy2fydtce"/>`,
		"fallback": "ion:sync-sharp",
	});
}

export default Component;
