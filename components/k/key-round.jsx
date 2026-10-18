import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fm_39bb1n.css';
import '../../css/i/iglncxbte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fm_39bb1n"/><path class="iglncxbte"/></g>`,
		"fallback": "vadivam:key-round",
	});
}

export default Component;
