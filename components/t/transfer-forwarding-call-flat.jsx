import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bvsh4tcni.css';
import '../../css/l/l9_nzpkbm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bvsh4tcni"/><path class="l9_nzpkbm"/></g>`,
		"fallback": "streamline-flex-color:transfer-forwarding-call-flat",
	});
}

export default Component;
