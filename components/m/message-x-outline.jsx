import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpfq5ioxf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpfq5ioxf"/>`,
		"fallback": "teenyicons:message-x-outline",
	});
}

export default Component;
