import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d0l7nbbsj.css';
import '../../css/j/j6fhbvyyj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d0l7nbbsj"/><path clip-rule="evenodd" class="j6fhbvyyj"/></g>`,
		"fallback": "streamline-plump-color:ruler-flat",
	});
}

export default Component;
