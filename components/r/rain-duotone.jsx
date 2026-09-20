import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kpjenbiwd.css';
import '../../css/z/z6w490ppc.css';
import '../../css/d/dcznip8ri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kpjenbiwd"/><path class="z6w490ppc"/><path class="dcznip8ri"/></g>`,
		"fallback": "lets-icons:rain-duotone",
	});
}

export default Component;
