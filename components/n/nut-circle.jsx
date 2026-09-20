import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/ypw0tibgl.css';
import '../../css/k/kgkdhebxg.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ypw0tibgl"/><path class="kgkdhebxg"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:nut-circle",
	});
}

export default Component;
