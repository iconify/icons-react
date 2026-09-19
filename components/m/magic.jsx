import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz00pjbrg.css';

const viewBox = {"width":718,"height":709};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tz00pjbrg"/>`,
		"fallback": "ls:magic",
	});
}

export default Component;
