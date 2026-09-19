import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/b/bp3gjiree.css';
import '../../css/r/rn30mkb4n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path clip-rule="evenodd" class="bp3gjiree"/><path class="rn30mkb4n"/></g>`,
		"fallback": "icon-park-outline:traditional-chinese-medicine",
	});
}

export default Component;
