import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz-7qynvn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rz-7qynvn"/>`,
		"fallback": "teenyicons:next-outline",
	});
}

export default Component;
