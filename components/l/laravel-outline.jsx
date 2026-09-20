import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_-66ebji.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_-66ebji"/>`,
		"fallback": "teenyicons:laravel-outline",
	});
}

export default Component;
