import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2y5ycc9l.css';
import '../../css/u/ujx7g2v4v.css';

const viewBox = {"width":15,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2y5ycc9l"/><path class="ujx7g2v4v"/>`,
		"fallback": "formkit:start",
	});
}

export default Component;
