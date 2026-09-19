import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls6_xn_4i.css';
import '../../css/q/qu341zbrs.css';
import '../../css/o/o8ni1dbhe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ls6_xn_4i"><path class="qu341zbrs"/><path class="o8ni1dbhe"/></g>`,
		"fallback": "catppuccin:key",
	});
}

export default Component;
