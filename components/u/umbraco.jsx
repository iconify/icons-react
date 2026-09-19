import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez5cvnbdp.css';

const viewBox = {"width":510,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez5cvnbdp"/>`,
		"fallback": "fa-brands:umbraco",
	});
}

export default Component;
