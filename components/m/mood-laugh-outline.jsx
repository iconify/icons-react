import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3o1lpb7n.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3o1lpb7n"/>`,
		"fallback": "teenyicons:mood-laugh-outline",
	});
}

export default Component;
