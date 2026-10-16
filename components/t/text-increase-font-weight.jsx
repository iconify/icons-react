import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/irn2k_ula.css';
import '../../css/i/iub47d_vj.css';
import '../../css/q/q8eb2xaoh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="irn2k_ula"/><path class="iub47d_vj"/><path class="q8eb2xaoh"/></g>`,
		"fallback": "andrsrxn:text-increase-font-weight",
	});
}

export default Component;
