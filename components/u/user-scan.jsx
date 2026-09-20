import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b680p_blz.css';
import '../../css/o/oq-b65kyl.css';
import '../../css/h/hipat9bbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b680p_blz"/><path clip-rule="evenodd" class="oq-b65kyl"/><path class="hipat9bbi"/></g>`,
		"fallback": "reicon:user-scan",
	});
}

export default Component;
