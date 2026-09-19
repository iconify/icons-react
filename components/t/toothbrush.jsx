import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oywfrbclt.css';
import '../../css/e/e-xc5vc_n.css';
import '../../css/u/umc5mob6m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oywfrbclt"/><path class="e-xc5vc_n"/><path class="umc5mob6m"/></g>`,
		"fallback": "fluent-emoji-flat:toothbrush",
	});
}

export default Component;
