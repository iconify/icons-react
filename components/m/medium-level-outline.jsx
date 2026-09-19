import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dfni2ccmi.css';
import '../../css/o/o3weqytux.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dfni2ccmi"/><path clip-rule="evenodd" class="o3weqytux"/></g>`,
		"fallback": "healthicons:medium-level-outline",
	});
}

export default Component;
