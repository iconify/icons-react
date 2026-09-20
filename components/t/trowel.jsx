import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk3tbmr1h.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk3tbmr1h"/>`,
		"fallback": "lineicons:trowel",
	});
}

export default Component;
