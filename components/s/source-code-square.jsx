import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/r5k9jxbce.css';
import '../../css/j/jvtjbnueh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="r5k9jxbce"/><path class="jvtjbnueh"/></g>`,
		"fallback": "hugeicons:source-code-square",
	});
}

export default Component;
