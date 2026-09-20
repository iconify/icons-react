import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxl7f5q3q.css';
import '../../css/m/m-_748b1i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxl7f5q3q"/><path clip-rule="evenodd" class="m-_748b1i"/>`,
		"fallback": "qlementine-icons:text-editor-16",
	});
}

export default Component;
