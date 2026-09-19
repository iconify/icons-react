import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rcsj_abfu.css';
import '../../css/z/zg5fcjbls.css';
import '../../css/v/v4a1nrb3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rcsj_abfu"/><path class="zg5fcjbls"/><path class="v4a1nrb3e"/></g>`,
		"fallback": "hugeicons:mouse-20",
	});
}

export default Component;
