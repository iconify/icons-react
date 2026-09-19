import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b67_51b1f.css';
import '../../css/z/zj7abniux.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b67_51b1f"/><path class="zj7abniux"/></g>`,
		"fallback": "bi:question-diamond",
	});
}

export default Component;
