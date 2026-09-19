import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/at0g76b4p.css';
import '../../css/t/tngi6xwzf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="at0g76b4p"/><path class="tngi6xwzf"/></g>`,
		"fallback": "healthicons:vagina-alt-outline",
	});
}

export default Component;
