import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/uwy-gqb8h.css';
import '../../css/j/jw704zd0t.css';
import '../../css/j/j8iq9-ffs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="uwy-gqb8h"/><path class="jw704zd0t"/><path class="j8iq9-ffs"/></g>`,
		"fallback": "hugeicons:steering",
	});
}

export default Component;
