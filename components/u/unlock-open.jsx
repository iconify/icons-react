import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y93a-bb6m.css';
import '../../css/c/c-d1wdduk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y93a-bb6m"/><path clip-rule="evenodd" class="c-d1wdduk"/></g>`,
		"fallback": "majesticons:unlock-open",
	});
}

export default Component;
