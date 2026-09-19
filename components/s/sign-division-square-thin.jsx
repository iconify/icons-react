import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/m/msy8t2bre.css';
import '../../css/c/c50uhqblm.css';
import '../../css/j/j7gjjlbfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="msy8t2bre"/><path class="c50uhqblm"/><path class="j7gjjlbfy"/></g>`,
		"fallback": "iconamoon:sign-division-square-thin",
	});
}

export default Component;
