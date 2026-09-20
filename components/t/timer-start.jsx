import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f-t_f7l_y.css';
import '../../css/j/jsr4rrr8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f-t_f7l_y"/><path class="jsr4rrr8o"/></g>`,
		"fallback": "reicon:timer-start",
	});
}

export default Component;
