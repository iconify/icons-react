import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f78a4ibso.css';
import '../../css/j/j_49osbhc.css';
import '../../css/k/k44-_bc8r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f78a4ibso"/><path class="j_49osbhc"/><path clip-rule="evenodd" class="k44-_bc8r"/></g>`,
		"fallback": "streamline-flex-color:search-arrow-increase-flat",
	});
}

export default Component;
