import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tnwts_9gl.css';
import '../../css/f/f8edcu39k.css';
import '../../css/l/l2mcogbbt.css';
import '../../css/h/hdyny9bio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tnwts_9gl"/><path class="f8edcu39k"/><path class="l2mcogbbt"/><path class="hdyny9bio"/></g>`,
		"fallback": "solar:list-cross-minimalistic-broken",
	});
}

export default Component;
