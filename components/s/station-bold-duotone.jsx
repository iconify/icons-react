import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w7fhj3b7v.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/a/a11e7l3fm.css';
import '../../css/e/ehxagry8c.css';
import '../../css/b/b9k8owbdf.css';
import '../../css/w/wxz0h6gmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w7fhj3b7v"/><g class="mc2zb0bvp"><path class="a11e7l3fm"/><path class="ehxagry8c"/><path class="b9k8owbdf"/><path class="wxz0h6gmo"/></g></g>`,
		"fallback": "solar:station-bold-duotone",
	});
}

export default Component;
