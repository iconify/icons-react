import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq9kkcbbd.css';
import '../../css/d/d56vnzbxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq9kkcbbd"/><path class="d56vnzbxk"/>`,
		"fallback": "solar:pen-bold-duotone",
	});
}

export default Component;
