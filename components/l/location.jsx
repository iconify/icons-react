import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u148y6bbs.css';
import '../../css/a/az7uqpbwk.css';
import '../../css/y/y9-n05-_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="u148y6bbs"><path class="az7uqpbwk"/><path class="y9-n05-_y"/></g>`,
		"fallback": "mage:location",
	});
}

export default Component;
