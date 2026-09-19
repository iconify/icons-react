import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ij6hfbcpw.css';
import '../../css/x/xewvnvwzj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ij6hfbcpw"/><path class="xewvnvwzj"/></g>`,
		"fallback": "bi:person-video3",
	});
}

export default Component;
