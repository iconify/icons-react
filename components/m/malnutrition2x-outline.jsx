import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xjj-okbac.css';
import '../../css/o/o52bo7_qt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xjj-okbac"/><path clip-rule="evenodd" class="o52bo7_qt"/></g>`,
		"fallback": "healthicons:malnutrition2x-outline",
	});
}

export default Component;
