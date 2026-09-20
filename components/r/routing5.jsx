import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/s2lgbubcc.css';
import '../../css/r/rq1xk5kyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="s2lgbubcc"/><path class="rq1xk5kyb"/></g>`,
		"fallback": "reicon:routing5",
	});
}

export default Component;
