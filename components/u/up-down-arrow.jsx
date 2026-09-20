import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7cjjcbnv.css';
import '../../css/w/w82a4gxog.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7cjjcbnv"/><path class="w82a4gxog"/>`,
		"fallback": "openmoji:up-down-arrow",
	});
}

export default Component;
