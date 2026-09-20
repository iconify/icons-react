import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kdpl1_b6g.css';
import '../../css/r/rnf8lschh.css';
import '../../css/c/c9u8hkz0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kdpl1_b6g"/><path class="rnf8lschh"/><path class="c9u8hkz0d"/></g>`,
		"fallback": "reicon:suitcase-tag-duotone",
	});
}

export default Component;
