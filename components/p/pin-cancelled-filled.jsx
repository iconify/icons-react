import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0k__6brh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0k__6brh"/>`,
		"fallback": "ix:pin-cancelled-filled",
	});
}

export default Component;
