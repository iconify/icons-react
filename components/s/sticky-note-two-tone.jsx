import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kik400ipb.css';
import '../../css/a/a9nni14sc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kik400ipb"/><path class="a9nni14sc"/></g>`,
		"fallback": "keyline-icons:sticky-note-two-tone",
	});
}

export default Component;
