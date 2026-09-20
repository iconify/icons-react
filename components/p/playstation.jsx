import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oly_4rbgm.css';
import '../../css/s/steyv6bzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oly_4rbgm"/><path class="steyv6bzh"/>`,
		"fallback": "lineicons:playstation",
	});
}

export default Component;
