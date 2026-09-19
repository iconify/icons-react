import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/axcbx-t_s.css';
import '../../css/t/tdhikub4m.css';
import '../../css/j/jcyhgg-5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="axcbx-t_s"/><path class="tdhikub4m"/><path class="jcyhgg-5l"/></g>`,
		"fallback": "hugeicons:mouse-04",
	});
}

export default Component;
