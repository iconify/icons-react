import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oln8vpg8q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oln8vpg8q"/>`,
		"fallback": "teenyicons:thumbtack-outline",
	});
}

export default Component;
