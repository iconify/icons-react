import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/js-e04bid.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="js-e04bid"/>`,
		"fallback": "teenyicons:layers-intersect-outline",
	});
}

export default Component;
