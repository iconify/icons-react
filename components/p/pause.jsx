import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv5g-ccfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv5g-ccfg"/>`,
		"fallback": "withicons:pause",
	});
}

export default Component;
