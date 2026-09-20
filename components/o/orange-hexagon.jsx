import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4rlq3n0s.css';
import '../../css/x/x1mdp195q.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4rlq3n0s"/><path class="x1mdp195q"/>`,
		"fallback": "openmoji:orange-hexagon",
	});
}

export default Component;
