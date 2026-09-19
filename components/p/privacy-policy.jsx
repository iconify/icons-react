import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f5fgk6uev.css';
import '../../css/j/j6xxlsbzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f5fgk6uev"/><path class="j6xxlsbzk"/></g>`,
		"fallback": "iconoir:privacy-policy",
	});
}

export default Component;
