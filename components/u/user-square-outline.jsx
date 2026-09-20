import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_b66ljaj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_b66ljaj"/>`,
		"fallback": "teenyicons:user-square-outline",
	});
}

export default Component;
