import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/oskhbx9_v.css';
import '../../css/d/dyhhhfcca.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="oskhbx9_v"/><path class="dyhhhfcca"/></g>`,
		"fallback": "streamline-flex-color:scanner-bar-code-flat",
	});
}

export default Component;
