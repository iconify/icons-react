import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z4v1w-nqe.css';
import '../../css/m/m08xde37b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z4v1w-nqe"/><path class="m08xde37b"/></g>`,
		"fallback": "streamline-plump-color:paintbrush-2-flat",
	});
}

export default Component;
