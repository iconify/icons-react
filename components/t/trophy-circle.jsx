import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fuvffhbzd.css';
import '../../css/l/la6jovbfo.css';
import '../../css/c/cbbp1-brx.css';
import '../../css/h/h5vm4jdva.css';
import '../../css/z/z3dmgobvf.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fuvffhbzd"/><path class="la6jovbfo"/><path class="cbbp1-brx"/><path class="h5vm4jdva"/><path class="z3dmgobvf"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:trophy-circle",
	});
}

export default Component;
