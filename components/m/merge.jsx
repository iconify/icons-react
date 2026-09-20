import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qef9l7bhw.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qef9l7bhw"/>`,
		"fallback": "iwwa:merge",
	});
}

export default Component;
