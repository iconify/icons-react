import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hf8y7jbvt.css';
import '../../css/f/fh-d-swvt.css';
import '../../css/r/r8sdp5bdc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hf8y7jbvt"/><path clip-rule="evenodd" class="fh-d-swvt"/><path class="r8sdp5bdc"/></g>`,
		"fallback": "healthicons:syphilis-alt",
	});
}

export default Component;
