import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i5x5t8b8o.css';
import '../../css/j/j9vsk2b8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="i5x5t8b8o"/><path class="j9vsk2b8a"/></g>`,
		"fallback": "keyline-icons:sticky-note-x-fill",
	});
}

export default Component;
