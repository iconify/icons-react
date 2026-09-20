import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jta17kyxk.css';
import '../../css/v/v0j0qihdv.css';
import '../../css/o/oby_l4d-i.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><path class="jta17kyxk"/><path class="v0j0qihdv"/><path class="oby_l4d-i"/></g><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:person-checkmark-off",
	});
}

export default Component;
