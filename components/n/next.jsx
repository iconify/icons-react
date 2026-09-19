import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls6_xn_4i.css';
import '../../css/v/v8h4yw1tz.css';
import '../../css/f/fvkeyncuk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ls6_xn_4i"><path class="v8h4yw1tz"/><path class="fvkeyncuk"/></g>`,
		"fallback": "catppuccin:next",
	});
}

export default Component;
