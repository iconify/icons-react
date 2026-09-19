import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qe5u3g6sz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qe5u3g6sz"/>`,
		"fallback": "fa6-solid:temperature-high",
	});
}

export default Component;
