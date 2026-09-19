import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/edp3p7bwr.css';
import '../../css/h/hh_ng-b9n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="edp3p7bwr"/><path clip-rule="evenodd" class="hh_ng-b9n"/></g>`,
		"fallback": "healthicons:laryngoscope",
	});
}

export default Component;
