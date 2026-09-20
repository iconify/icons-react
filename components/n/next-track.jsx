import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/ec0oc1b-f.css';
import '../../css/v/v7oc-z36f.css';
import '../../css/p/p7p1dsjoa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ec0oc1b-f"/><path class="v7oc-z36f"/><path class="p7p1dsjoa"/></g>`,
		"fallback": "pepicons-pencil:next-track",
	});
}

export default Component;
