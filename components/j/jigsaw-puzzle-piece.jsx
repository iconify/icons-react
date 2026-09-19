import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/diz9d_b0q.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="diz9d_b0q"/>`,
		"fallback": "dinkie-icons:jigsaw-puzzle-piece",
	});
}

export default Component;
