import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwee6s4xt.css';
import '../../css/g/grkcr9m5y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwee6s4xt"/><path class="grkcr9m5y"/>`,
		"fallback": "energy-icons:ruler-20-bold",
	});
}

export default Component;
