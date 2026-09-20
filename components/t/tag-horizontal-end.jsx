import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/llce8yb-u.css';
import '../../css/z/zznlfnbip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="llce8yb-u"/><path class="zznlfnbip"/></g>`,
		"fallback": "keyline-icons:tag-horizontal-end",
	});
}

export default Component;
