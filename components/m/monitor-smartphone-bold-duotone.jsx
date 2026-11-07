import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8zc9pbaf.css';
import '../../css/o/odesuob1o.css';
import '../../css/w/w5u_c5a9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8zc9pbaf"/><path clip-rule="evenodd" class="odesuob1o"/><path class="w5u_c5a9s"/>`,
		"fallback": "solar:monitor-smartphone-bold-duotone",
	});
}

export default Component;
