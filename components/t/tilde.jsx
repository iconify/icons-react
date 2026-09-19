import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfdw9zbye.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfdw9zbye"/>`,
		"fallback": "fa-solid:tilde",
	});
}

export default Component;
