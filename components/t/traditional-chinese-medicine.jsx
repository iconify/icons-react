import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/t/t0baxibkh.css';
import '../../css/m/mdjx2zbma.css';
import '../../css/w/w8m--pb8p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path clip-rule="evenodd" class="t0baxibkh"/><path class="mdjx2zbma"/><path class="w8m--pb8p"/></g>`,
		"fallback": "icon-park:traditional-chinese-medicine",
	});
}

export default Component;
