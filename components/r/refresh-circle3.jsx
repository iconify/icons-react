import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p9-zrkb4g.css';
import '../../css/e/e4ig0xa-u.css';
import '../../css/m/me1lhjg0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p9-zrkb4g"/><path class="e4ig0xa-u"/><path class="me1lhjg0b"/></g>`,
		"fallback": "reicon:refresh-circle3",
	});
}

export default Component;
