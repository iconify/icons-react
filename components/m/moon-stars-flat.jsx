import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pbc0z4bfc.css';
import '../../css/r/r9dox2b9l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pbc0z4bfc"/><path class="r9dox2b9l"/></g>`,
		"fallback": "streamline-plump-color:moon-stars-flat",
	});
}

export default Component;
