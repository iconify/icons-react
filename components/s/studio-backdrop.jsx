import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pmln3v0ih.css';
import '../../css/w/w_q6dk-pb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pmln3v0ih"/><path class="w_q6dk-pb"/></g>`,
		"fallback": "pepicons:studio-backdrop",
	});
}

export default Component;
