import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/un-u7jjsi.css';
import '../../css/n/n8w9nlbwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="un-u7jjsi"/><path class="n8w9nlbwd"/></g>`,
		"fallback": "iconoir:union-horiz-alt",
	});
}

export default Component;
