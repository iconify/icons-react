import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v8nk3d6-m.css';
import '../../css/d/dn656gbyk.css';
import '../../css/f/fkm6ccb_r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v8nk3d6-m"/><path class="dn656gbyk"/><path class="fkm6ccb_r"/></g>`,
		"fallback": "fluent-emoji-high-contrast:post-office",
	});
}

export default Component;
