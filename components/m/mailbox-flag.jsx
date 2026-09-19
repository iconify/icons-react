import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mec1j2blp.css';
import '../../css/t/tt8syib7h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mec1j2blp"/><path class="tt8syib7h"/></g>`,
		"fallback": "bi:mailbox-flag",
	});
}

export default Component;
