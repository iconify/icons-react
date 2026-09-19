import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aa3b9ub_r.css';
import '../../css/r/rofgv92rt.css';
import '../../css/r/rr7_81b-a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aa3b9ub_r"/><path clip-rule="evenodd" class="rofgv92rt"/><path clip-rule="evenodd" class="rr7_81b-a"/></g>`,
		"fallback": "healthicons:occupational-therapy-outline",
	});
}

export default Component;
