import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bieyuq2ue.css';
import '../../css/d/d9or84w3r.css';
import '../../css/f/frytnybvc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bieyuq2ue"/><path clip-rule="evenodd" class="d9or84w3r"/><path class="frytnybvc"/></g>`,
		"fallback": "healthicons:vomitting",
	});
}

export default Component;
