import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kgcs4h1pb.css';
import '../../css/b/b71639vob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kgcs4h1pb secondary"/><path class="b71639vob primary"/></g>`,
		"fallback": "iconaut:sun-duotone",
	});
}

export default Component;
