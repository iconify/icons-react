import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4ezlsbrm.css';
import '../../css/l/lxlb-0bab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4ezlsbrm"/><path class="lxlb-0bab"/>`,
		"fallback": "lets-icons:send-hor-duotone",
	});
}

export default Component;
