import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jfv1j7b0i.css';
import '../../css/w/ww_-iqrml.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jfv1j7b0i"/><path class="ww_-iqrml"/></g>`,
		"fallback": "bi:menu-button-wide",
	});
}

export default Component;
