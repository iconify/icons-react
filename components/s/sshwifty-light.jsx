import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8rbiiblu.css';
import '../../css/w/w_gkkwbts.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8rbiiblu"/><path class="w_gkkwbts"/>`,
		"fallback": "selfhst:sshwifty-light",
	});
}

export default Component;
