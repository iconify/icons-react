import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwqeewr-p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwqeewr-p"/>`,
		"fallback": "teenyicons:thumb-up-outline",
	});
}

export default Component;
