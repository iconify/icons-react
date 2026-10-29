import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zmot90b0d.css';
import '../../css/z/zsrud4b_u.css';
import '../../css/r/rdnu6ociv.css';
import '../../css/a/adv3oacce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-k zmot90b0d"/><path class="zsrud4b_u"/><path class="rdnu6ociv"/><path class="adv3oacce wm-s"/></g>`,
		"fallback": "withicons-bauhaus:mouse-pointer-click",
	});
}

export default Component;
