import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rh0btlb9w.css';
import '../../css/b/bjjjyibvr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rh0btlb9w"/><path class="bjjjyibvr"/></g>`,
		"fallback": "streamline-plump-color:tag-alt-flat",
	});
}

export default Component;
