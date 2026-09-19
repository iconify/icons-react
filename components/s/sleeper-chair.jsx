import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hdjevjbzr.css';
import '../../css/b/bvjh5-rxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hdjevjbzr"/><path class="bvjh5-rxl"/></g>`,
		"fallback": "iconoir:sleeper-chair",
	});
}

export default Component;
