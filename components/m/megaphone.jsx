import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pl-p6qb-v.css';
import '../../css/y/yisg2xf3a.css';
import '../../css/c/cq_-qoy2r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pl-p6qb-v"/><path class="yisg2xf3a"/><path class="cq_-qoy2r"/></g>`,
		"fallback": "pepicons:megaphone",
	});
}

export default Component;
