import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fx8-3s55f.css';
import '../../css/x/x369u9ffe.css';
import '../../css/y/yp-e2_xcl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fx8-3s55f"/><path class="x369u9ffe"/><path class="yp-e2_xcl"/></g>`,
		"fallback": "bi:sign-stop",
	});
}

export default Component;
