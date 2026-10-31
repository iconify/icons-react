import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k90ttjb1t.css';
import '../../css/e/e_x3zybkg.css';
import '../../css/b/bb61rfb2j.css';
import '../../css/v/v7m8z84mo.css';
import '../../css/y/ye1l8cv6k.css';
import '../../css/z/zdn3bzbcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="k90ttjb1t wm-shadow"/><path class="e_x3zybkg"/><path class="bb61rfb2j"/><path class="v7m8z84mo"/><path class="ye1l8cv6k"/><path class="zdn3bzbcl"/></g>`,
		"fallback": "withicons-retro:thandai",
	});
}

export default Component;
