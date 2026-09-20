import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oaky9cbmf.css';
import '../../css/j/jyw82vbqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oaky9cbmf"/><path class="jyw82vbqk"/></g>`,
		"fallback": "keyline-icons:train-fill",
	});
}

export default Component;
