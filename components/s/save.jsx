import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk5carb5w.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk5carb5w"/>`,
		"fallback": "zmdi:save",
	});
}

export default Component;
