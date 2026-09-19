import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/clguj6bjn.css';
import '../../css/a/ae4e2rbkv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="clguj6bjn"/><path clip-rule="evenodd" class="ae4e2rbkv"/></g>`,
		"fallback": "healthicons:loinc",
	});
}

export default Component;
