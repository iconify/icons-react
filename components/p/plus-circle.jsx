import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk63d0d6x.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk63d0d6x"/>`,
		"fallback": "system-uicons:plus-circle",
	});
}

export default Component;
