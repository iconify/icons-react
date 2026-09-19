import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rg4phqbtj.css';
import '../../css/t/tz17h-bbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rg4phqbtj"/><path class="tz17h-bbd"/></g>`,
		"fallback": "iconoir:long-arrow-right-up",
	});
}

export default Component;
