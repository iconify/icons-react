import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyxukz89o.css';
import '../../css/z/zfqmlvbbt.css';
import '../../css/d/drrqprdbi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="eyxukz89o"><path class="zfqmlvbbt"/><path class="drrqprdbi"/></g>`,
		"fallback": "flat-color-icons:redo",
	});
}

export default Component;
