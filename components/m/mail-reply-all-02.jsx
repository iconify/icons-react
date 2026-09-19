import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fd0-ap5jh.css';
import '../../css/c/cznc6ybck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fd0-ap5jh"/><path class="cznc6ybck"/></g>`,
		"fallback": "hugeicons:mail-reply-all-02",
	});
}

export default Component;
