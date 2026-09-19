import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k9-237rsn.css';
import '../../css/p/p-gsvsbww.css';
import '../../css/p/p8igeb0vv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k9-237rsn"/><path class="p-gsvsbww"/><path class="p8igeb0vv"/></g>`,
		"fallback": "icon-park-outline:three-triangles",
	});
}

export default Component;
