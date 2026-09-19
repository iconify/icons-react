import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj0bo8wrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj0bo8wrk"/>`,
		"fallback": "bxs:keyboard",
	});
}

export default Component;
