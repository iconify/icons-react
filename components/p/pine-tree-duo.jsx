import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/triuozb4n.css';
import '../../css/o/o7pfzdi5k.css';
import '../../css/q/q-w-8ydma.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="triuozb4n"/><path class="o7pfzdi5k"/><path class="q-w-8ydma"/></g>`,
		"fallback": "streamline-kameleon-color:pine-tree-duo",
	});
}

export default Component;
