import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/clq6hscjn.css';
import '../../css/w/wjlxmglat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="clq6hscjn"/><path class="wjlxmglat"/></g>`,
		"fallback": "iconoir:open-select-hand-gesture",
	});
}

export default Component;
