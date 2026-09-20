import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0oo4lbih.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0oo4lbih"/>`,
		"fallback": "teenyicons:invoice-outline",
	});
}

export default Component;
