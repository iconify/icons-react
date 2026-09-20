import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cm-b6lb7n.css';
import '../../css/t/tbvoa4bqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cm-b6lb7n"/><path clip-rule="evenodd" class="tbvoa4bqf"/></g>`,
		"fallback": "reicon:sidebar-code",
	});
}

export default Component;
