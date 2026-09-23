import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nn3_43btn.css';
import '../../css/q/q87f7s28x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nn3_43btn"/><path class="q87f7s28x"/></g>`,
		"fallback": "keyline-icons:wand-sparkles-fill",
	});
}

export default Component;
