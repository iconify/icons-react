import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ej0e7sner.css';
import '../../css/r/rph45lb6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ej0e7sner"/><path class="rph45lb6o"/></g>`,
		"fallback": "tabler:stack-forward",
	});
}

export default Component;
