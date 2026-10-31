import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bv9-wdmwu.css';
import '../../css/e/ejssn1b7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="bv9-wdmwu"/><path class="ejssn1b7l"/></g>`,
		"fallback": "struq:view-small",
	});
}

export default Component;
