import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v5cddtb6p.css';
import '../../css/h/h4t62y4sv.css';
import '../../css/a/aoztx7byq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="v5cddtb6p"/><path class="h4t62y4sv"/><path class="aoztx7byq"/></g>`,
		"fallback": "streamline-plump-color:recording-tape-1-flat",
	});
}

export default Component;
