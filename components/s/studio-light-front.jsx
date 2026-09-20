import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yowpaje2k.css';
import '../../css/d/da5cgf35n.css';
import '../../css/o/omaqzfbdh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yowpaje2k"/><path class="da5cgf35n"/><path class="omaqzfbdh"/></g>`,
		"fallback": "pepicons-pencil:studio-light-front",
	});
}

export default Component;
