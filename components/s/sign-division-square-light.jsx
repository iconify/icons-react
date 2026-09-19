import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/r/rn7dq_b3g.css';
import '../../css/g/g8m3171mh.css';
import '../../css/l/l9ewbkbml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="rn7dq_b3g"/><path class="g8m3171mh"/><path class="l9ewbkbml"/></g>`,
		"fallback": "iconamoon:sign-division-square-light",
	});
}

export default Component;
