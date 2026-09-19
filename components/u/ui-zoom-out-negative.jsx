import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/borqfhc5e.css';
import '../../css/g/goc9ksb0s.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsUiZoomOutNegative0)" clip-rule="evenodd" class="n1lsf0bnc"><path class="borqfhc5e"/><path class="goc9ksb0s"/></g><defs><clipPath id="healthiconsUiZoomOutNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:ui-zoom-out-negative",
	});
}

export default Component;
