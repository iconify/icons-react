import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rujiq5bwm.css';

const viewBox = {"width":1664,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rujiq5bwm"/>`,
		"fallback": "fa:magic",
	});
}

export default Component;
