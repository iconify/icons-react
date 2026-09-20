import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nqsi145hz.css';
import '../../css/p/p9n-8e69s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nqsi145hz"/><path class="p9n-8e69s"/></g>`,
		"fallback": "proicons:paintbrush-2-sparkle",
	});
}

export default Component;
