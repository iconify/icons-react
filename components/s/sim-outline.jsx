import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ns2ynsrwl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ns2ynsrwl"/>`,
		"fallback": "teenyicons:sim-outline",
	});
}

export default Component;
