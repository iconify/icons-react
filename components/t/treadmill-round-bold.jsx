import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6gx6-b_c.css';
import '../../css/z/z6xyxkbfa.css';
import '../../css/u/u_isrfbff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6gx6-b_c"/><path clip-rule="evenodd" class="z6xyxkbfa"/><path class="u_isrfbff"/>`,
		"fallback": "solar:treadmill-round-bold",
	});
}

export default Component;
