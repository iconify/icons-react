import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gxeoprbqu.css';
import '../../css/z/zdj10g__g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gxeoprbqu"/><path class="zdj10g__g"/></g>`,
		"fallback": "bi:mic-mute",
	});
}

export default Component;
