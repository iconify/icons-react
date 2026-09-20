import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zk5mskbiw.css';
import '../../css/b/b7h6dsbwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zk5mskbiw"/><path class="b7h6dsbwh"/></g>`,
		"fallback": "keyline-icons:sun-dim-duotone",
	});
}

export default Component;
