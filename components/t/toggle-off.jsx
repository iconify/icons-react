import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/ut75nwbbk.css';
import '../../css/w/wles-jbug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ut75nwbbk"/><path class="wles-jbug"/></g>`,
		"fallback": "reicon:toggle-off",
	});
}

export default Component;
