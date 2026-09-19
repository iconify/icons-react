import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jx7qrbcvx.css';
import '../../css/e/eipbxpbtj.css';
import '../../css/p/pb4v8bbjy.css';
import '../../css/s/szgmrm0gt.css';
import '../../css/o/opqd96b4u.css';
import '../../css/f/fw_og4k-h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jx7qrbcvx"/><path class="eipbxpbtj"/><path class="pb4v8bbjy"/><path class="szgmrm0gt"/><path class="opqd96b4u"/><path class="fw_og4k-h"/></g>`,
		"fallback": "fluent-emoji-flat:poodle",
	});
}

export default Component;
