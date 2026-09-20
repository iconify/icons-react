import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd7_z4a6q.css';
import '../../css/p/p52vwxbxp.css';
import '../../css/d/dqns40q9s.css';
import '../../css/c/c172tscnl.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd7_z4a6q"/><path class="p52vwxbxp"/><path class="dqns40q9s"/><path class="c172tscnl"/>`,
		"fallback": "openmoji:root-vegetable",
	});
}

export default Component;
