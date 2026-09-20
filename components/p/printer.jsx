import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jayntqsmv.css';
import '../../css/d/dwh97eahs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jayntqsmv"/><path class="dwh97eahs"/></g>`,
		"fallback": "rivet-icons:printer",
	});
}

export default Component;
