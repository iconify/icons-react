import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/a_u72_okn.css';
import '../../css/h/h4o1pabcz.css';
import '../../css/a/a8tt1dsgl.css';
import '../../css/z/zpd26ob0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="a_u72_okn wm-deco"/><path class="h4o1pabcz wm-deco"/><path class="a8tt1dsgl wm-k"/><path class="wm-a zpd26ob0q"/></g>`,
		"fallback": "withicons:notebook-blueprint",
	});
}

export default Component;
