import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gaymnac6g.css';
import '../../css/r/r0e4yobde.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gaymnac6g"/><path class="r0e4yobde"/></g>`,
		"fallback": "healthicons:sugar-free",
	});
}

export default Component;
