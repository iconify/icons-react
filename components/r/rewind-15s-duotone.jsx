import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h28_j0bpo.css';
import '../../css/z/zlzxvdb5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h28_j0bpo"/><path clip-rule="evenodd" class="zlzxvdb5f"/></g>`,
		"fallback": "reicon:rewind-15s-duotone",
	});
}

export default Component;
