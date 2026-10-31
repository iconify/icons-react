import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/omq6avb4v.css';
import '../../css/u/ubee5s7hy.css';
import '../../css/r/r763xj6dy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="omq6avb4v"/><path class="ubee5s7hy"/><path class="r763xj6dy"/></g>`,
		"fallback": "streamline-kameleon-color:pine-tree-pop",
	});
}

export default Component;
