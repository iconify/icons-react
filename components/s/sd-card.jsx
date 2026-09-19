import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jt0xnq6sh.css';
import '../../css/k/k907rib4j.css';
import '../../css/a/a4jy-o8-a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jt0xnq6sh"/><path class="k907rib4j"/><path class="a4jy-o8-a"/></g>`,
		"fallback": "glyphs-poly:sd-card",
	});
}

export default Component;
