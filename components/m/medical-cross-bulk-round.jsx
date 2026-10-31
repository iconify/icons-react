import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ovmkgzbai.css';
import '../../css/l/l9nv6gvqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ovmkgzbai"/><path class="l9nv6gvqi"/></g>`,
		"fallback": "coolicons:medical-cross-bulk-round",
	});
}

export default Component;
