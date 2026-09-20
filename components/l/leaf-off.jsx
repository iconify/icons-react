import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e7vn6xb4u.css';
import '../../css/d/d0fw0c23a.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><path class="e7vn6xb4u"/><path class="d0fw0c23a"/></g><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:leaf-off",
	});
}

export default Component;
