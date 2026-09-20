import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odqf5ztvj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odqf5ztvj"/>`,
		"fallback": "teenyicons:wan-outline",
	});
}

export default Component;
