import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/ed7fvnb1p.css';
import '../../css/m/m6xzm-jkq.css';

const viewBox = {"width":16,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ed7fvnb1p"/><path class="m6xzm-jkq"/></g>`,
		"fallback": "si-glyph:sign-in",
	});
}

export default Component;
