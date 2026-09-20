import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h-r8a2llg.css';
import '../../css/j/j8jcxpbfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h-r8a2llg"/><path class="j8jcxpbfq"/></g>`,
		"fallback": "keyline-icons:tape-two-tone",
	});
}

export default Component;
