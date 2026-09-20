import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e1uzmwbsc.css';
import '../../css/w/wyzyqwb9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e1uzmwbsc"/><path class="wyzyqwb9l"/></g>`,
		"fallback": "reicon:note-remove",
	});
}

export default Component;
