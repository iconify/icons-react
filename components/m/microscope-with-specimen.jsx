import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gh_8djbzz.css';
import '../../css/r/r42ncjbgv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gh_8djbzz"/><path clip-rule="evenodd" class="r42ncjbgv"/></g>`,
		"fallback": "healthicons:microscope-with-specimen",
	});
}

export default Component;
