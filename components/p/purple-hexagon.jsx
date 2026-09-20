import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6h71cw6d.css';
import '../../css/x/x1mdp195q.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6h71cw6d"/><path class="x1mdp195q"/>`,
		"fallback": "openmoji:purple-hexagon",
	});
}

export default Component;
