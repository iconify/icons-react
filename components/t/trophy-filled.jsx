import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sewx3-8el.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sewx3-8el"/>`,
		"fallback": "ix:trophy-filled",
	});
}

export default Component;
