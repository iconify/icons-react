import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/iy3mnob7p.css';
import '../../css/e/e-qescbuo.css';
import '../../css/h/huu1r6ztb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="iy3mnob7p"/><path class="e-qescbuo"/><path class="huu1r6ztb"/></g>`,
		"fallback": "pepicons-pencil:shuffle",
	});
}

export default Component;
