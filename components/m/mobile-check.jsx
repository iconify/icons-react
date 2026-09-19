import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7__hwxfb.css';
import '../../css/f/fo40zs72w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7__hwxfb"/><path class="fo40zs72w"/>`,
		"fallback": "carbon:mobile-check",
	});
}

export default Component;
