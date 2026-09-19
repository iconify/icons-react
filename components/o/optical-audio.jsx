import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/ddk587bmb.css';
import '../../css/w/wtyo39cge.css';
import '../../css/v/vuct_acof.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ddk587bmb"/><path class="wtyo39cge"/><path class="vuct_acof"/></g>`,
		"fallback": "bi:optical-audio",
	});
}

export default Component;
