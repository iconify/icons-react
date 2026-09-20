import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n3_pvkb9w.css';
import '../../css/c/c2w87rbfl.css';
import '../../css/r/r4ow6xb6m.css';
import '../../css/v/v7qa0nzlx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="n3_pvkb9w"/><path class="c2w87rbfl"/><path class="r4ow6xb6m"/><path class="v7qa0nzlx"/></g>`,
		"fallback": "streamline-freehand:task-list-clipboard-check",
	});
}

export default Component;
