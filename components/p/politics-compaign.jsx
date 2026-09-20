import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/swu2-ep_t.css';
import '../../css/c/cxoeo1iew.css';
import '../../css/p/p_neqcrey.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="swu2-ep_t"/><path class="cxoeo1iew"/><path class="p_neqcrey"/></g>`,
		"fallback": "streamline-color:politics-compaign",
	});
}

export default Component;
