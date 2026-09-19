import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s777x83rz.css';
import '../../css/n/n05unrbuu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s777x83rz"/><path class="n05unrbuu"/></g>`,
		"fallback": "bi:person-workspace",
	});
}

export default Component;
