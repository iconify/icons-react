import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1pi9x57x.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1pi9x57x"/>`,
		"fallback": "system-uicons:volume-disabled",
	});
}

export default Component;
