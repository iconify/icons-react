import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lhylnccvv.css';
import '../../css/z/zjl1v5i_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lhylnccvv"/><path class="zjl1v5i_b"/></g>`,
		"fallback": "reicon:ship-filled",
	});
}

export default Component;
