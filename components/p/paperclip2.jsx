import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtjm-lb_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtjm-lb_j"/>`,
		"fallback": "reicon:paperclip2",
	});
}

export default Component;
