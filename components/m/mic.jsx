import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h8j6n9b-r.css';
import '../../css/e/eh9_3rc2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h8j6n9b-r"/><path class="eh9_3rc2b"/></g>`,
		"fallback": "feather:mic",
	});
}

export default Component;
