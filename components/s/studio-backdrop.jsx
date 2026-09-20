import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pkdvtmbbt.css';
import '../../css/h/h1wuc8bxf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pkdvtmbbt"/><path class="h1wuc8bxf"/></g>`,
		"fallback": "pepicons-pencil:studio-backdrop",
	});
}

export default Component;
