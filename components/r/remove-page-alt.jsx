import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bfy466lvt.css';
import '../../css/d/dbvahxbkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bfy466lvt"/><path class="dbvahxbkk"/></g>`,
		"fallback": "iconoir:remove-page-alt",
	});
}

export default Component;
