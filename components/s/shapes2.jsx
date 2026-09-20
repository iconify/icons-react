import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/ao9yr5bhc.css';
import '../../css/p/pidxmvnnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ao9yr5bhc"/><path class="pidxmvnnh"/></g>`,
		"fallback": "reicon:shapes2",
	});
}

export default Component;
