import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/c/cdv8dmblq.css';
import '../../css/u/uyayqqbpt.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="cdv8dmblq"/><path class="uyayqqbpt"/></g>`,
		"fallback": "skill-icons:nim-light",
	});
}

export default Component;
