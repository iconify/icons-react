import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y63wv5bum.css';
import '../../css/a/a-ssoobaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y63wv5bum"/><path class="a-ssoobaw"/>`,
		"fallback": "solar:oven-mitts-bold-duotone",
	});
}

export default Component;
