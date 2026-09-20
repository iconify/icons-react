import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hsvi1nb9w.css';
import '../../css/f/f046g0bgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hsvi1nb9w"/><path class="f046g0bgs"/></g>`,
		"fallback": "mynaui:pocket",
	});
}

export default Component;
