import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n88wg71_i.css';
import '../../css/l/lted4lvzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n88wg71_i"/><path class="lted4lvzw"/></g>`,
		"fallback": "reicon:logout4",
	});
}

export default Component;
