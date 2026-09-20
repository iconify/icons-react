import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow15xdb1e.css';
import '../../css/p/p5f87vboi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow15xdb1e"/><path class="p5f87vboi"/>`,
		"fallback": "stash:user-dollar-duotone",
	});
}

export default Component;
