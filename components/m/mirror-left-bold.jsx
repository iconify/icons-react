import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wi_jt4bbp.css';
import '../../css/y/ykelgknbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wi_jt4bbp"/><path class="ykelgknbf"/>`,
		"fallback": "solar:mirror-left-bold",
	});
}

export default Component;
