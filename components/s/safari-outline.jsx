import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7c3h9bnb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7c3h9bnb"/>`,
		"fallback": "teenyicons:safari-outline",
	});
}

export default Component;
