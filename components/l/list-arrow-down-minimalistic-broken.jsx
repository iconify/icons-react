import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zz_qntbxb.css';
import '../../css/j/jh9foyc5c.css';
import '../../css/j/jtti8bn6v.css';
import '../../css/t/tnwts_9gl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zz_qntbxb"/><path class="jh9foyc5c"/><path class="jtti8bn6v"/><path class="tnwts_9gl"/></g>`,
		"fallback": "solar:list-arrow-down-minimalistic-broken",
	});
}

export default Component;
