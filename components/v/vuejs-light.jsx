import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bu26s_bte.css';
import '../../css/m/mje6qybkv.css';
import '../../css/l/l11flwi9t.css';
import '../../css/x/xob__rktb.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="bu26s_bte"/><path class="mje6qybkv"/><path class="l11flwi9t"/><path class="xob__rktb"/></g>`,
		"fallback": "skill-icons:vuejs-light",
	});
}

export default Component;
