import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr_nnrqul.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yr_nnrqul"/>`,
		"fallback": "teenyicons:play-outline",
	});
}

export default Component;
