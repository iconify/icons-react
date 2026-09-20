import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pzp8ogjvu.css';
import '../../css/o/o5fhfcboe.css';
import '../../css/v/v_v5z6bnm.css';
import '../../css/u/utdmog81f.css';
import '../../css/p/pw7af6bia.css';
import '../../css/h/h1cr886eo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pzp8ogjvu"/><path class="o5fhfcboe"/><path class="v_v5z6bnm"/><path class="utdmog81f"/><path class="pw7af6bia"/><path class="h1cr886eo"/></g>`,
		"fallback": "solar:notebook-2-line-duotone",
	});
}

export default Component;
