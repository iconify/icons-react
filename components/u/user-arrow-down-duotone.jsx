import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1rh2qbtt.css';
import '../../css/o/ow15xdb1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1rh2qbtt"/><path class="ow15xdb1e"/>`,
		"fallback": "stash:user-arrow-down-duotone",
	});
}

export default Component;
