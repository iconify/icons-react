import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldhof1blp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldhof1blp"/>`,
		"fallback": "teenyicons:text-outline",
	});
}

export default Component;
