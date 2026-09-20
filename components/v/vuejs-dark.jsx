import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/m/mje6qybkv.css';
import '../../css/l/l11flwi9t.css';
import '../../css/l/lr2zmibyl.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path class="mje6qybkv"/><path class="l11flwi9t"/><path class="lr2zmibyl"/></g>`,
		"fallback": "skill-icons:vuejs-dark",
	});
}

export default Component;
