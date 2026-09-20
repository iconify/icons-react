import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap4nx0b0l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ap4nx0b0l"/>`,
		"fallback": "teenyicons:left-circle-outline",
	});
}

export default Component;
