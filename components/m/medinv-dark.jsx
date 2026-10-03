import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv5t23ldk.css';
import '../../css/o/oqpqr4qja.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vv5t23ldk"/><circle class="oqpqr4qja"/>`,
		"fallback": "selfhst:medinv-dark",
	});
}

export default Component;
