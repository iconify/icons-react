import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cuk0vf3zf.css';
import '../../css/x/xpy1h2bwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cuk0vf3zf"/><path class="xpy1h2bwq"/></g>`,
		"fallback": "reicon:note",
	});
}

export default Component;
