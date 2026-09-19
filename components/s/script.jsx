import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/befny0bst.css';
import '../../css/c/cjm1ouksc.css';
import '../../css/u/ufci-5pkw.css';

const viewBox = {"width":2000,"height":2000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="befny0bst"><path class="cjm1ouksc"/><path class="ufci-5pkw"/></g>`,
		"fallback": "bpmn:script",
	});
}

export default Component;
