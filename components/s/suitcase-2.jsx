import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yg31gvb8a.css';
import '../../css/o/opt2h2bot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yg31gvb8a"/><rect class="opt2h2bot"/></g>`,
		"fallback": "reicon:suitcase-2",
	});
}

export default Component;
