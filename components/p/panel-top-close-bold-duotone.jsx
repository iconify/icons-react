import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g1fz9lbxt.css';
import '../../css/s/sfju8cbdk.css';
import '../../css/n/n3if34fqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="g1fz9lbxt"/><path class="sfju8cbdk"/><path class="n3if34fqm"/></g>`,
		"fallback": "solar:panel-top-close-bold-duotone",
	});
}

export default Component;
