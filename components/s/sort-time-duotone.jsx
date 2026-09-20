import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lz7qt4bzp.css';
import '../../css/z/zihvvnsoo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lz7qt4bzp"/><path class="zihvvnsoo"/></g>`,
		"fallback": "reicon:sort-time-duotone",
	});
}

export default Component;
