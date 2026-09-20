import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gx9wb3b1b.css';
import '../../css/l/l9iug8byu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gx9wb3b1b"/><path class="l9iug8byu"/></g>`,
		"fallback": "solar:user-hands-outline",
	});
}

export default Component;
