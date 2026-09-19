import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nko9qqbys.css';
import '../../css/c/cllqxnb6a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nko9qqbys"/><path clip-rule="evenodd" class="cllqxnb6a"/></g>`,
		"fallback": "healthicons:star-medium",
	});
}

export default Component;
