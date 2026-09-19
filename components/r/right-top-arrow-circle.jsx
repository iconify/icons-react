import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyzmj84gk.css';
import '../../css/r/rrzjp2boj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyzmj84gk"/><path class="rrzjp2boj"/>`,
		"fallback": "bx:right-top-arrow-circle",
	});
}

export default Component;
