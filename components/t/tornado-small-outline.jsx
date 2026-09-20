import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qk-e_esvl.css';
import '../../css/l/lg37rfb8x.css';
import '../../css/m/m7io8nc5k.css';
import '../../css/x/x15y8e2er.css';
import '../../css/z/zegbqci7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qk-e_esvl"/><path class="lg37rfb8x"/><path class="m7io8nc5k"/><path class="x15y8e2er"/><path class="zegbqci7c"/></g>`,
		"fallback": "solar:tornado-small-outline",
	});
}

export default Component;
