import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0im_gbxt.css';
import '../../css/n/n7miu-b0l.css';
import '../../css/f/fahhi3b_v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0im_gbxt"/><path class="n7miu-b0l"/><path class="fahhi3b_v"/>`,
		"fallback": "selfhst:snapchat",
	});
}

export default Component;
