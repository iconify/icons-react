import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymayf7r7m.css';
import '../../css/o/ow15xdb1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymayf7r7m"/><path class="ow15xdb1e"/>`,
		"fallback": "stash:user-clock-duotone",
	});
}

export default Component;
