import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zvuq7jb4r.css';
import '../../css/w/wuumlobyk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zvuq7jb4r"/><path class="wuumlobyk"/></g>`,
		"fallback": "rivet-icons:newspaper",
	});
}

export default Component;
