import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/apcmqcc7g.css';
import '../../css/z/z4sjonb8q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="apcmqcc7g"/><path class="z4sjonb8q"/></g>`,
		"fallback": "codicon:report-question",
	});
}

export default Component;
