import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jn9v4s1pb.css';
import '../../css/i/in02xeq1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jn9v4s1pb"/><path class="in02xeq1u"/></g>`,
		"fallback": "reicon:volume-cross",
	});
}

export default Component;
