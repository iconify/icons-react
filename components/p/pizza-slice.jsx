import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m6pkdzb0p.css';
import '../../css/j/jbfeyeo7i.css';
import '../../css/x/x6-sqeb_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="m6pkdzb0p"/><path class="jbfeyeo7i"/><path class="x6-sqeb_l"/></g>`,
		"fallback": "iconoir:pizza-slice",
	});
}

export default Component;
