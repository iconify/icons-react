import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jio4_ci7g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jio4_ci7g"/>`,
		"fallback": "pinhead:signboard",
	});
}

export default Component;
