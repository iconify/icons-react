import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/ezih4uege.css';
import '../../css/c/c2e1wb76g.css';
import '../../css/n/nemsoye5j.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ezih4uege"/><path class="c2e1wb76g"/><path class="nemsoye5j"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:shuffle-circle",
	});
}

export default Component;
