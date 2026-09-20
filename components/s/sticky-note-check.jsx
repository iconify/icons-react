import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eayhk_bcx.css';
import '../../css/q/q-frw9b4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="eayhk_bcx"/><path class="q-frw9b4o"/></g>`,
		"fallback": "lucide:sticky-note-check",
	});
}

export default Component;
