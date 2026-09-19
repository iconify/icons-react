import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ic15dcfue.css';
import '../../css/z/zz13p087w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ic15dcfue"/><path class="zz13p087w"/></g>`,
		"fallback": "bi:vignette",
	});
}

export default Component;
