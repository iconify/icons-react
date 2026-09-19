import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m61dqybvl.css';
import '../../css/n/n5taqgggh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="m61dqybvl"/><path class="n5taqgggh"/></g>`,
		"fallback": "bi:unindent",
	});
}

export default Component;
