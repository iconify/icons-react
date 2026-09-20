import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pzf74kw2c.css';
import '../../css/k/ki693pw_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pzf74kw2c"/><path class="ki693pw_r"/></g>`,
		"fallback": "reicon:text-x-duotone",
	});
}

export default Component;
