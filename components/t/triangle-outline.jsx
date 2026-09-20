import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpr85zb3q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpr85zb3q"/>`,
		"fallback": "teenyicons:triangle-outline",
	});
}

export default Component;
