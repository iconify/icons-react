import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xjdplkbsa.css';
import '../../css/l/ldmlcslsr.css';
import '../../css/w/wd3sd6brj.css';
import '../../css/l/l-8a42bqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xjdplkbsa"/><path class="ldmlcslsr"/><path class="wd3sd6brj"/><path class="l-8a42bqo"/></g>`,
		"fallback": "reicon:sort-desc-duotone",
	});
}

export default Component;
