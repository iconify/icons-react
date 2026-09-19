import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd7cz3bpd.css';
import '../../css/i/iqpyqqfcx.css';
import '../../css/z/zcfs6pb-x.css';
import '../../css/h/h8t82w8fi.css';
import '../../css/x/x-9vd8n5j.css';
import '../../css/d/d_rftj6qn.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qd7cz3bpd"><path class="iqpyqqfcx"/><path class="zcfs6pb-x"/><path class="h8t82w8fi"/><path class="x-9vd8n5j"/><path class="d_rftj6qn"/></g>`,
		"fallback": "devicon:portainer",
	});
}

export default Component;
