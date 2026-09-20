import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uaat9ufjy.css';
import '../../css/n/nt938zbgh.css';
import '../../css/g/gpl9ofb_e.css';
import '../../css/c/c5n_coblh.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uaat9ufjy"/><path class="nt938zbgh"/><path class="gpl9ofb_e"/><path class="c5n_coblh"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:people-circle",
	});
}

export default Component;
