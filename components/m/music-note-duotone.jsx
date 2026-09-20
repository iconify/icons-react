import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x9mxjjj0o.css';
import '../../css/z/zii0zsbrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x9mxjjj0o"/><path class="zii0zsbrt"/></g>`,
		"fallback": "keyline-icons:music-note-duotone",
	});
}

export default Component;
