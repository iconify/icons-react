import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zc1vi2b-v.css';
import '../../css/b/bi7l6m0-g.css';
import '../../css/y/ydvxzi99r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="zc1vi2b-v"/><path class="bi7l6m0-g"/><path class="ydvxzi99r"/></g>`,
		"fallback": "hugeicons:judge",
	});
}

export default Component;
