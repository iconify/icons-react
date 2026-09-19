import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fjdlmqb_x.css';
import '../../css/h/h27bu91mp.css';
import '../../css/j/j03b64icf.css';
import '../../css/m/m83y9jlqd.css';
import '../../css/e/eei69lyyc.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fjdlmqb_x"/><circle class="h27bu91mp"/><circle class="j03b64icf"/><circle class="m83y9jlqd"/><path class="eei69lyyc"/></g>`,
		"fallback": "cif:tn",
	});
}

export default Component;
