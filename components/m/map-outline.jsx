import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q23lrv8wj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q23lrv8wj"/>`,
		"fallback": "pinhead:map-outline",
	});
}

export default Component;
