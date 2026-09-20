import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/der0l86hc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="der0l86hc"/>`,
		"fallback": "keyline-icons:sun",
	});
}

export default Component;
