import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk0epachj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jk0epachj"/>`,
		"fallback": "pinhead:pixel-anchor",
	});
}

export default Component;
