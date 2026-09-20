import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/e/ex0g_cb-o.css';
import '../../css/b/bcqf_8b-o.css';
import '../../css/s/scozvdbkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="ex0g_cb-o"/><path class="bcqf_8b-o"/><path class="scozvdbkl"/></g>`,
		"fallback": "lets-icons:speed-light",
	});
}

export default Component;
