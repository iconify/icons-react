import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ffclrobbn.css';
import '../../css/v/vsxun6bmm.css';
import '../../css/f/frhmk4zcr.css';
import '../../css/f/f61bxactw.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ffclrobbn"/><path class="vsxun6bmm"/><path class="frhmk4zcr"/><path class="f61bxactw"/></g>`,
		"fallback": "cif:kw",
	});
}

export default Component;
