import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v5mpafm6p.css';
import '../../css/n/nt-hnbm2v.css';
import '../../css/l/l487h0b9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="v5mpafm6p"/><path class="nt-hnbm2v"/><path class="l487h0b9t"/></g>`,
		"fallback": "solar:layout-freeform-outline",
	});
}

export default Component;
