import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzd5q4bgo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzd5q4bgo"/>`,
		"fallback": "teenyicons:loader-outline",
	});
}

export default Component;
