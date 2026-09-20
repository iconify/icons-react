import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktdkn9brl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktdkn9brl"/>`,
		"fallback": "teenyicons:search-circle-outline",
	});
}

export default Component;
