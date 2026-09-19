import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/s/sol3rjohs.css';
import '../../css/o/oxvw6_b_f.css';
import '../../css/y/yhc8-nbwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><circle class="sol3rjohs"/><path class="oxvw6_b_f"/><path class="yhc8-nbwi"/></g>`,
		"fallback": "iconamoon:upside-down-face",
	});
}

export default Component;
