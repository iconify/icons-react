import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dq3b28brj.css';
import '../../css/y/yqnvme_iz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dq3b28brj"/><path class="yqnvme_iz"/></g>`,
		"fallback": "reicon:phone4-duotone",
	});
}

export default Component;
