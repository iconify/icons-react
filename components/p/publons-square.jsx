import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfq21bb6r.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfq21bb6r"/>`,
		"fallback": "academicons:publons-square",
	});
}

export default Component;
