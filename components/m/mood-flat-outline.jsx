import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ve5zjyb9s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ve5zjyb9s"/>`,
		"fallback": "teenyicons:mood-flat-outline",
	});
}

export default Component;
