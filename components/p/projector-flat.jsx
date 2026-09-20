import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vm0-cwb_j.css';
import '../../css/u/uu7njfm_v.css';
import '../../css/v/v8xw9bbrg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vm0-cwb_j"/><path clip-rule="evenodd" class="uu7njfm_v"/><path class="v8xw9bbrg"/></g>`,
		"fallback": "streamline-flex-color:projector-flat",
	});
}

export default Component;
