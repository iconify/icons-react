import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr7ok7mjt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dr7ok7mjt"/>`,
		"fallback": "teenyicons:text-solid",
	});
}

export default Component;
