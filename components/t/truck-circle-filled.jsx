import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/w/wgoqhkium.css';
import '../../css/g/gjufbsy8v.css';
import '../../css/a/a0gj-nbzv.css';
import '../../css/n/nv-bqkb1x.css';
import '../../css/d/dwbbcobye.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><path clip-rule="evenodd" class="wgoqhkium"/><path clip-rule="evenodd" class="gjufbsy8v"/><path class="a0gj-nbzv"/><path clip-rule="evenodd" class="nv-bqkb1x"/><path clip-rule="evenodd" class="dwbbcobye"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:truck-circle-filled",
	});
}

export default Component;
