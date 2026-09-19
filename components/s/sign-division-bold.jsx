import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/e/e0cq9pbxq.css';
import '../../css/j/j6_nkabxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="e0cq9pbxq"/><path class="j6_nkabxl"/></g>`,
		"fallback": "iconamoon:sign-division-bold",
	});
}

export default Component;
