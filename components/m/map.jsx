import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/m/m-gkls7fb.css';
import '../../css/x/x80s06bvh.css';
import '../../css/k/k1bgszu8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="m-gkls7fb"/><path class="x80s06bvh"/><path class="k1bgszu8c"/></g>`,
		"fallback": "matita:map",
	});
}

export default Component;
