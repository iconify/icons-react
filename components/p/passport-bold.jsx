import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ozdkyobjs.css';
import '../../css/s/s6v728bzl.css';
import '../../css/k/k8ojjh_gd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ozdkyobjs"/><path class="s6v728bzl"/><path clip-rule="evenodd" class="k8ojjh_gd"/></g>`,
		"fallback": "solar:passport-bold",
	});
}

export default Component;
