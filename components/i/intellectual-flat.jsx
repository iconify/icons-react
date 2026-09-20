import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/x8hog-ksa.css';
import '../../css/q/q-zmvxrjg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="x8hog-ksa"/><path class="q-zmvxrjg"/></g>`,
		"fallback": "streamline-plump-color:intellectual-flat",
	});
}

export default Component;
