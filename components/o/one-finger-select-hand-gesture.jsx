import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w6rawmbjk.css';
import '../../css/j/jy40m9mst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w6rawmbjk"/><path class="jy40m9mst"/></g>`,
		"fallback": "iconoir:one-finger-select-hand-gesture",
	});
}

export default Component;
