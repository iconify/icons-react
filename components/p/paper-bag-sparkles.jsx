import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s1a5rjwjp.css';
import '../../css/m/mvy0n-b4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s1a5rjwjp"/><path class="mvy0n-b4e"/></g>`,
		"fallback": "keyline-icons:paper-bag-sparkles",
	});
}

export default Component;
