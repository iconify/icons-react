import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yqiagkb0r.css';
import '../../css/d/dvxr-tb9e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yqiagkb0r"/><path class="dvxr-tb9e"/></g>`,
		"fallback": "streamline-color:moon-cloud-flat",
	});
}

export default Component;
