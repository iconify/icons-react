import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v90n_sbfk.css';
import '../../css/r/rs9a2ybyz.css';
import '../../css/g/gnokhxweg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v90n_sbfk"/><path class="rs9a2ybyz"/><path clip-rule="evenodd" class="gnokhxweg"/></g>`,
		"fallback": "healthicons:skull-outline",
	});
}

export default Component;
