import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/ptqbabcmv.css';
import '../../css/m/mzy2mhzrn.css';
import '../../css/c/cdianvu6r.css';
import '../../css/v/vu5fr_lab.css';
import '../../css/t/t8dah2_ly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ptqbabcmv"/><path class="mzy2mhzrn"/><path class="cdianvu6r"/><path class="vu5fr_lab"/><path class="t8dah2_ly"/></g>`,
		"fallback": "solar:paw-outline",
	});
}

export default Component;
