import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bdyk7-rhw.css';
import '../../css/s/s0azq1w2x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bdyk7-rhw"/><path class="s0azq1w2x"/></g>`,
		"fallback": "streamline-color:lift-disability-flat",
	});
}

export default Component;
