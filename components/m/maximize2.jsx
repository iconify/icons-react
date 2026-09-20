import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wugv_1bga.css';
import '../../css/i/id__8qb0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wugv_1bga"/><path class="id__8qb0e"/></g>`,
		"fallback": "reicon:maximize2",
	});
}

export default Component;
