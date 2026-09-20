import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zyd7xdb-i.css';
import '../../css/s/srbtzacgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zyd7xdb-i"/><path clip-rule="evenodd" class="srbtzacgb"/></g>`,
		"fallback": "reicon:ssd-duotone",
	});
}

export default Component;
