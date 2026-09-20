import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzp4s85tv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzp4s85tv"/>`,
		"fallback": "teenyicons:sort-down-outline",
	});
}

export default Component;
