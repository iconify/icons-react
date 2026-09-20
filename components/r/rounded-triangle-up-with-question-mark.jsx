import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh609ibnx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh609ibnx"/>`,
		"fallback": "pinhead:rounded-triangle-up-with-question-mark",
	});
}

export default Component;
