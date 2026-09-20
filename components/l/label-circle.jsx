import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jhjvekb4k.css';
import '../../css/f/fc5tljbzo.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jhjvekb4k"/><path class="fc5tljbzo"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:label-circle",
	});
}

export default Component;
