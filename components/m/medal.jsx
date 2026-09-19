import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mw03xnjge.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mw03xnjge"/>`,
		"fallback": "fa-solid:medal",
	});
}

export default Component;
