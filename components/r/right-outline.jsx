import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3mve4_ly.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3mve4_ly"/>`,
		"fallback": "teenyicons:right-outline",
	});
}

export default Component;
